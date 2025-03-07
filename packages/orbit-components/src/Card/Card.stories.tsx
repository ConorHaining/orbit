import * as React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import Text from "../Text";
import ButtonLink from "../ButtonLink";
import Badge from "../Badge";
import Clock from "../icons/Clock";
import CardSection from "./CardSection";
import { ELEMENT_OPTIONS } from "../Heading/consts";

import Card from ".";

export default {
  title: "Card",
};

export const Default = () => {
  const title = text("Title", "Card with title");
  const titleAs = select("titleAs", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
  return <Card title={title} titleAs={titleAs} />;
};

export const CardWithDescription = () => {
  const title = text("Title", "Card with title");
  const description = text("Description", "This is description of the card");
  return <Card onClose={action("onClose")} title={title} description={description} />;
};

CardWithDescription.story = {
  name: "Card with description",
};

export const CardWithActions = () => {
  const title = text("Title", "Card with title");
  const description = text("Description", "This is description of the card");
  return (
    <Card
      title={title}
      description={description}
      actions={
        <ButtonLink compact size="small">
          Button
        </ButtonLink>
      }
    />
  );
};

CardWithActions.story = {
  name: "Card with actions",
};

export const CardWithOnlySection = () => {
  return (
    <Card>
      <CardSection>This is content of card</CardSection>
    </Card>
  );
};

CardWithOnlySection.story = {
  name: "Card with only section",
};

export const CardWithSections = () => {
  const titleAs = select("titleAs", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
  const sectionTitle = text("SectionTitle", "Section Title");
  const sectionDescription = text("SectionDescription", "Section Description");
  return (
    <Card>
      <CardSection
        onClick={action("onClick")}
        title={sectionTitle}
        description={sectionDescription}
        titleAs={titleAs}
      />
      <CardSection title={sectionTitle} description={sectionDescription} titleAs={titleAs} />
      <CardSection title={sectionTitle} description={sectionDescription} titleAs={titleAs} />
    </Card>
  );
};

CardWithSections.story = {
  name: "Card with sections",
};

export const CardWithExpandableSections = () => {
  const title = text("Title", "Card with title");
  const description = text("Description", "This is description of the card");
  const sectionTitle = text("SectionTitle", "Section Title");
  return (
    <Card title={title} onClose={action("onClose")} description={description}>
      <CardSection expandable title={sectionTitle}>
        This is a section content
      </CardSection>
      <CardSection expandable title={sectionTitle}>
        This is a section content
      </CardSection>
      <CardSection expandable title={sectionTitle}>
        This is a section content
      </CardSection>
    </Card>
  );
};

CardWithExpandableSections.story = {
  name: "Card with expandable sections",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardWithControlledAndUncontrolled = () => {
  const expanded = boolean("expanded", true);
  const title = text("Title", "Card with title");
  const description = text("Description", "This is description of the card");
  const sectionTitle = text("SectionTitle", "Section Title");
  return (
    <Card title={title} description={description}>
      <CardSection
        expandable
        expanded={expanded}
        onClose={action("onClose")}
        onExpand={action("onExpand")}
        title={sectionTitle}
      >
        This is a section content
      </CardSection>
      <CardSection
        expandable
        title={sectionTitle}
        onClose={action("onClose")}
        onExpand={action("onExpand")}
      >
        This is a section content
      </CardSection>
    </Card>
  );
};

CardWithControlledAndUncontrolled.story = {
  name: "Card with controlled and uncontrolled",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardWithControlledWithKnobe = () => {
  const expanded = boolean("expanded", false);
  const title = text("Title", "Card with title");
  const description = text("Description", "This is description of the card");
  const sectionTitle = text("SectionTitle", "Section Title");
  return (
    <Card title={title} description={description}>
      <CardSection expandable expanded={expanded} title={sectionTitle}>
        This is a section content
      </CardSection>
    </Card>
  );
};

CardWithControlledWithKnobe.story = {
  name: "Card with controlled with knobe",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardWithDefaultExpanded = () => {
  const initialExpanded = boolean("initialExpended", true);
  return (
    <Card>
      <CardSection
        expandable
        header={
          <Stack inline align="center" justify="end">
            <Text type="secondary">Trip length: 1h55m</Text>
            <Badge icon={<Clock />} type="warningSubtle">
              Unavailable
            </Badge>
          </Stack>
        }
      >
        Hidden content
      </CardSection>
      <CardSection
        expandable
        initialExpanded={initialExpanded}
        onExpand={action("onExpand")}
        actions={
          <ButtonLink compact type="secondary" size="small">
            Close
          </ButtonLink>
        }
        onClose={action("onClose")}
        header={
          <Stack inline justify="end">
            <Text type="secondary">Trip length: 1h55m</Text>
            <Badge icon={<Clock />} type="warningSubtle">
              Unavailable
            </Badge>
          </Stack>
        }
      >
        By default visible content
      </CardSection>
    </Card>
  );
};

CardWithDefaultExpanded.story = {
  name: "Card with default expanded",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const CardWithMixedSections = () => {
  const title = text("Title", "Card with title");
  const description = text("Description", "This is description of the card");
  const sectionTitle = text("SectionTitle", "Section Title");
  const sectionDescription = text("SectionDescription", "Section Description");
  return (
    <Card
      title={title}
      description={description}
      actions={
        <ButtonLink compact size="small">
          Button
        </ButtonLink>
      }
    >
      <CardSection
        expandable
        title={sectionTitle}
        actions={
          <ButtonLink compact size="small" type="secondary">
            Button
          </ButtonLink>
        }
        description={sectionDescription}
      >
        Section Content
      </CardSection>
      <CardSection expandable title={sectionTitle} description={sectionDescription}>
        Expandable Content
      </CardSection>
      <CardSection title={sectionTitle} description={sectionDescription}>
        Section Content
      </CardSection>
    </Card>
  );
};

CardWithMixedSections.story = {
  name: "Card with mixed sections",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const LoadingCard = () => {
  const title = text("Title", "Card with title");
  return (
    <Card title={title} loading>
      <CardSection>kek</CardSection>
    </Card>
  );
};

LoadingCard.story = {
  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Rtl = () => (
  <RenderInRtl>
    <Card title="Title of the CardHeader" description="Description of the CardHeader">
      <CardSection title="Content with Heading and text">
        <Text>Text in content</Text>
      </CardSection>
      <CardSection title="Content with Heading and text">
        <Text>Text in content</Text>
      </CardSection>
      <CardSection title="Content with Heading and text" expandable>
        Text in content
      </CardSection>

      <CardSection
        expandable
        title="Content with Heading and text"
        initialExpanded
        actions={
          <ButtonLink compact size="small">
            Action
          </ButtonLink>
        }
      >
        <Text>Text in content</Text>
      </CardSection>
    </Card>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Accessibility = () => {
  const title = text("Title", "Card with title");
  const dataA11ySection = text("dataA11ySection", "ID-OF-CARD");
  return <Card title={title} dataA11ySection={dataA11ySection} />;
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

export const VisualTest = () => {
  return (
    <div className="space-y-xs bg-ink-light">
      <Card title="Somebody once" />
      <Card title="Somebody once" description="Told me the world is gonna roll me" />
      <Card
        title="Somebody once"
        description="Told me the world is gonna roll me"
        actions={
          <ButtonLink compact size="small">
            Sharpest tool
          </ButtonLink>
        }
      />

      <Card title="Somebody once" description="Told me the world is gonna roll me">
        <CardSection title="I ain't">
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
      </Card>
      <Card title="Somebody once" description="Told me the world is gonna roll me">
        <CardSection title="I ain't" expandable>
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
      </Card>
      <Card title="Somebody once" description="Told me the world is gonna roll me">
        <CardSection title="I ain't" expandable initialExpanded>
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
      </Card>

      <Card title="Somebody once" description="Told me the world is gonna roll me">
        <CardSection title="I ain't">
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
        <CardSection title="I ain't" expandable>
          The sharpest tool in the shed
        </CardSection>
        <CardSection title="I ain't" expandable initialExpanded>
          The sharpest tool in the shed
        </CardSection>
        <CardSection
          expandable
          title="I ain't"
          actions={
            <ButtonLink compact size="small">
              All star
            </ButtonLink>
          }
        >
          <Text>The sharpest tool in the shed</Text>
        </CardSection>
      </Card>
    </div>
  );
};

VisualTest.story = {
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
