import { Meta, Story } from "@storybook/react/types-6-0";

import Radio, { RadioProps } from ".";

export default {
  title: "Radio",
  component: Radio,
  argTypes: {
    onCheck: { action: "checked" },
  },
} as Meta;

export const Default: Story<RadioProps> = (args) => <Radio {...args} />;
