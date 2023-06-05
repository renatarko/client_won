import { Meta, Story } from "@storybook/react/types-6-0";
import Dropdown, { DropdownProps } from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: Story<DropdownProps> = (args) => (
  <div style={{ maxWidth: "80rem", margin: "auto" }}>
    <Dropdown {...args} />
  </div>
);

Default.args = {
  title: "Click here",
  children: "content",
};
