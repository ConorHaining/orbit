"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import Select from "../Select";
import Stack from "../Stack";
import ButtonLink from "../Button";
import defaultTheme from "../defaultTheme";
import type { MappedOptions, Props } from "./types";

const StyledNavigation = styled.div<{ show?: boolean }>`
  background-color: ${({ theme }) => theme.orbit.paletteCloudLight}; /* TODO: Token */
  padding: ${({ theme }) => theme.orbit.spaceMedium}; /* TODO: Token */
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  ${({ show }) =>
    !show &&
    css`
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      white-space: nowrap;
      padding: 0;
      position: absolute;
      width: 1px;
    `};
`;

StyledNavigation.defaultProps = {
  theme: defaultTheme,
};

const StyledSelectWrapper = styled.div`
  max-width: 800px;
`;

const SkipNavigation = ({
  actions,
  feedbackUrl,
  feedbackLabel = "Send feedback",
  firstSectionLabel = "Jump to section",
  firstActionLabel = "Common actions",
}: Props) => {
  const [links, setLinks] = React.useState<HTMLAnchorElement[]>([]);
  const [mappedLinks, setMappedLinks] = React.useState<MappedOptions[]>([]);
  const [innerPages, setPages] = React.useState<{ value: number; label?: string }[]>([]);
  const [show, setShow] = React.useState(false);

  const handleLinksClick = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
    const index = Number(ev.currentTarget.value);
    const selected = links[index - 1];

    if (selected) {
      selected.setAttribute("tabindex", "-1");
      selected.focus();
    }
  };

  const handlePageClick = (ev: React.SyntheticEvent<HTMLSelectElement>) => {
    if (actions) {
      const index = Number(ev.currentTarget.value);
      const selected = actions[index - 1];

      if (selected.onClick) {
        selected.onClick();
      } else if (selected.link) {
        window.location.href = selected.link;
      }
    }
  };

  const handleFocus = () => {
    if (links.length === 0) {
      // @ts-expect-error TODO
      const selectedLinks = document.querySelectorAll("[data-a11y-section]") as HTMLAnchorElement[];
      const mappedSections = [
        {
          value: 0,
          label: firstSectionLabel,
        },
        ...Object.keys(selectedLinks).map(key => ({
          value: Number(key) + 1,
          label: selectedLinks[Number(key)].innerText,
        })),
      ];

      if (selectedLinks) {
        setLinks(selectedLinks);
      }

      setMappedLinks(mappedSections);

      if (actions) {
        const mappedPages = [
          {
            value: 0,
            label: firstActionLabel,
          },
          ...actions.map((el, i) => {
            return { value: i + 1, label: el.name };
          }),
        ];

        setPages(mappedPages);
      }
    }
    setShow(true);
  };

  return (
    <StyledNavigation tabIndex={-1} onFocus={handleFocus} onBlur={() => setShow(false)} show={show}>
      <Stack justify="between">
        <StyledSelectWrapper>
          <Stack align="center">
            <Select options={mappedLinks} onChange={handleLinksClick} />
            {innerPages.length > 0 && <Select options={innerPages} onChange={handlePageClick} />}
          </Stack>
        </StyledSelectWrapper>
        {feedbackUrl && (
          <ButtonLink href={feedbackUrl} type="secondary" external size="small">
            {feedbackLabel}
          </ButtonLink>
        )}
      </Stack>
    </StyledNavigation>
  );
};

export default SkipNavigation;
