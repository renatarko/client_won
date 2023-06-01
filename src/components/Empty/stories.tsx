import { Meta, Story } from "@storybook/react/types-6-0";
import Empty, { EmptyProps } from ".";

export default {
  title: "Empty",
  component: Empty,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    title: "A simple title",
    description: "a simple description",
  }
}as Meta

export const Default: Story<EmptyProps> = (args) => (
  <div style={{maxWidth: "40rem", margin: "auto"}}>
    <Empty {...args} hasLink/>
  </div>
)
