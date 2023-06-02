import { Meta, Story } from "@storybook/react/types-6-0";

import FormProfile from ".";

export default {
  title: "Form/FormProfile",
  component: FormProfile,
  // parameters: {
  //   backgrounds: {
  //     default: "won-dark",
  //   },
  // },
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800, margin: "0 auto" }}>
    <FormProfile {...args} />
  </div>
);
