import React from "react";
import { action } from "@storybook/addon-actions";

import Text from "../Text";
import Button from "../Button";
import Stack from "../Stack";
import AccordionSection from "./AccordionSection";
import useMediaQuery from "../hooks/useMediaQuery";

import Accordion from ".";

const Footer = () => {
  const { isTablet, isMediumMobile } = useMediaQuery();

  return (
    <Stack flex shrink justify="between" direction={isMediumMobile ? "row" : "column"}>
      <Button fullWidth={!isTablet} type="secondary">
        Back to previous segment
      </Button>
      <Button fullWidth={!isTablet} type="primarySubtle">
        Continue to next segment
      </Button>
    </Stack>
  );
};

export default {
  title: "Accordion",
};

export const Default = () => {
  const [expandedSection, setExpandedSection] = React.useState("0X1");

  return (
    <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
      <AccordionSection
        id="0X0"
        header={
          <Stack spacing="small">
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
      <AccordionSection
        id="0X1"
        header={
          <Stack spacing="small">
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
      <AccordionSection
        id="0X2"
        header={
          <Stack spacing="small">
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
    </Accordion>
  );
};

export const AccordionWithDisabledSections = () => {
  const [expandedSection, setExpandedSection] = React.useState("0X1");

  return (
    <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
      <AccordionSection
        id="0X0"
        expandable={false}
        header={
          <Stack>
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
      <AccordionSection
        id="0X1"
        header={
          <Stack>
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
      <AccordionSection
        id="0X2"
        expandable={false}
        header={
          <Stack>
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
      <AccordionSection
        id="0X3"
        header={
          <Stack>
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
    </Accordion>
  );
};

AccordionWithDisabledSections.story = {
  name: "Accordion with disabled sections",
};

export const AccordionWithCustomActions = () => {
  const [expandedSection, setExpandedSection] = React.useState("0X1");

  return (
    <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
      <AccordionSection
        id="0X0"
        header={
          <Stack>
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
        actions={<Button onClick={action("Open onClick")}>Open</Button>}
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
      <AccordionSection
        id="0X1"
        header={
          <Stack>
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
        actions={<Button>Open</Button>}
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
      <AccordionSection
        id="0X2"
        header={
          <Stack>
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
        actions={
          <Stack direction="row">
            <Button onClick={action("Edit onClick")} type="secondary">
              Edit
            </Button>
            <Button onClick={action("Close onClick")}>Custom close</Button>
          </Stack>
        }
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
    </Accordion>
  );
};

AccordionWithCustomActions.story = {
  name: "Accordion with custom actions",
};

export const AccordionWithStickyFooter = () => {
  const [expandedSection, setExpandedSection] = React.useState("0X1");

  return (
    <Accordion expandedSection={expandedSection} onExpand={id => setExpandedSection(String(id))}>
      <AccordionSection
        id="0X0"
        header={
          <Stack>
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
      >
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
      <AccordionSection
        id="0X1"
        header={
          <Stack spacing="small">
            <Text type="primary">This is a header label</Text>
            <Text size="small">This is a header label</Text>
          </Stack>
        }
        footer={<Footer />}
      >
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary" spaceAfter="large">
          This is a content text
        </Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary" spaceAfter="large">
          This is a content text
        </Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
      <AccordionSection
        id="0X2"
        header={
          <Stack spacing="small">
            <Text type="primary">This is a content text</Text>
            <Text size="small">This is a content text</Text>
          </Stack>
        }
        footer={<Footer />}
      >
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
        <Text type="primary">This is a content text</Text>
      </AccordionSection>
    </Accordion>
  );
};

AccordionWithStickyFooter.story = {
  name: "Accordion with sticky footer",
};

export const LoadingAccordion = () => {
  return (
    <Accordion loading>
      <AccordionSection>This is a section content</AccordionSection>
    </Accordion>
  );
};

export const AccordionVisualTest = () => {
  return (
    <div className="space-y-md">
      <Accordion>
        <AccordionSection id="0X0" header={<Text type="primary">Expandable</Text>}>
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection id="0X2" expandable={false} header={<Text type="primary">Static</Text>}>
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
        <AccordionSection
          id="0X3"
          header={<Text type="primary">Custom action</Text>}
          actions={<Button>Button</Button>}
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>

      <Accordion expandedSection="1">
        <AccordionSection id="1" header={<Text type="primary">Expanded</Text>}>
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>

      <Accordion expandedSection="1">
        <AccordionSection
          id="1"
          header={<Text type="primary">Expanded</Text>}
          footer={<Text type="primary">Footer</Text>}
        >
          <Text type="primary">This is a content text</Text>
        </AccordionSection>
      </Accordion>
    </div>
  );
};

AccordionVisualTest.story = {
  name: "Accordion visual test",
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
