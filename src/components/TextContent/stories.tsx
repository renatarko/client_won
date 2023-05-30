import { Meta, Story } from "@storybook/react/types-6-0";
import TextContent, { TextContentProps } from ".";
import textContentMock from "./mock";

export default {
  title: "TextContent",
  component: TextContent,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: textContentMock,
} as Meta;

export const Default: Story<TextContentProps> = (args) => (
  <div style={{ maxWidth: "144rem", padding: "1.5rem" }}>
    <TextContent {...args} />
  </div>
);
