import { Story, Meta } from "@storybook/react/types-6-0";
import Menu from ".";

export default {
  title: "Menu",
  component: Menu,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: Story = (args) => <Menu {...args} />;

Default.parameters = {
  layout: "fullscreen",
  backgrounds: {
    default: "dark",
  },
};
