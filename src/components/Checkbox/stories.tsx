import { Meta, Story } from "@storybook/react/types-6-0";

import Checkbox, { CheckboxProps } from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    onCheck: { action: "checked" },
  },
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ paddingBottom: "1rem" }}>
      <Checkbox {...args} isChecked />
    </div>

    <div style={{ paddingBottom: "1rem" }}>
      <Checkbox {...args} label="Adventure" labelFor="adventure" />
    </div>

    <div style={{ paddingBottom: "1rem" }}>
      <Checkbox {...args} label="Strategy" labelFor="strategy" />
    </div>
  </>
);
