"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import WizardStep from "./WizardStep";
import { WizardStepContextProvider } from "./WizardContext";
import Button from "../Button";
import Stack from "../Stack";
import ChevronDown from "../icons/ChevronDown";
import Portal from "../Portal";
import Modal from "../Modal";
import { CardSection } from "../Card";
import useMediaQuery from "../hooks/useMediaQuery";
import defaultTheme from "../defaultTheme";
import mq from "../utils/mediaQuery";
import type { Props, WizardStepProps } from "./types";

const unstyledListMixin = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

// support column layout on desktop
// https://github.com/kiwicom/orbit/issues/3308
const StyledList = styled.ul<{ $direction?: "row" | "column" }>`
  ${({ $direction }) => css`
    display: flex;
    ${unstyledListMixin};
    ${mq.largeMobile(css`
      flex-direction: ${$direction};
      li {
        flex: 1 1 0%;
      }
    `)}
  `}
`;

StyledList.defaultProps = {
  theme: defaultTheme,
};

const Wizard = ({
  dataTest,
  lockScrolling = true,
  direction,
  id,
  labelClose = "Close",
  labelProgress,
  completedSteps,
  activeStep,
  children,
  onChangeStep,
}: Props) => {
  const { isLargeMobile } = useMediaQuery();
  const [open, setOpen] = React.useState(false);
  const toggle = React.useRef(null);
  const isCompact = !isLargeMobile;
  const childrenArray = React.Children.toArray(children) as React.ReactElement<WizardStepProps>[];
  const stepStatuses = childrenArray.map((step, index) => {
    if (index < completedSteps) return "completed";
    if (index === completedSteps) return "available";
    return "disabled";
  });

  const activeStepTitle = childrenArray.find((_, index) => index === activeStep)?.props.title;
  const stepsCount = React.Children.count(children);

  const steps = React.Children.map(children, (step, index) => (
    <WizardStepContextProvider
      index={index}
      status={stepStatuses[index]}
      isLastStep={index === stepsCount - 1}
      isColumnOnDesktop={direction === "column"}
      nextStepStatus={stepStatuses[index + 1]}
      isCompact={isCompact}
      isActive={activeStep === index}
      onChangeStep={onChangeStep}
      onClose={() => setOpen(false)}
    >
      {step}
    </WizardStepContextProvider>
  ));

  if (isCompact) {
    return (
      <>
        <Button
          ref={toggle}
          dataTest={dataTest}
          ariaControls={id}
          ariaExpanded={open}
          type="secondary"
          fullWidth
          iconRight={<ChevronDown />}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Stack as="span" inline>
            {typeof labelProgress !== "undefined" && <b>{labelProgress}</b>}
            <span
              css={css`
                font-weight: normal;
              `}
            >
              {activeStepTitle}
            </span>
          </Stack>
        </Button>
        <Portal>
          <div id={id}>
            {open && (
              <Modal
                hasCloseButton={false}
                lockScrolling={lockScrolling}
                onClose={() => {
                  setOpen(false);
                }}
              >
                <nav
                  css={css`
                    /* matching this to ModalBody's border-radius */
                    padding-top: 9px;
                  `}
                >
                  <ul
                    css={css`
                      ${unstyledListMixin};
                    `}
                  >
                    {steps}
                    <li>
                      <CardSection>
                        <Button
                          type="secondary"
                          fullWidth
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          {labelClose}
                        </Button>
                      </CardSection>
                    </li>
                  </ul>
                </nav>
              </Modal>
            )}
          </div>
        </Portal>
      </>
    );
  }

  return (
    <nav>
      <StyledList $direction={direction}>{steps}</StyledList>
    </nav>
  );
};

export default Wizard;
export { WizardStep };
