import { Meta, Story } from "@storybook/react/types-6-0";

import Radio, { RadioProps } from ".";

export default {
  title: "Radio",
  component: Radio,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  argTypes: {
    onCheck: { action: "checked" },
  },
} as Meta;

export const Default: Story<RadioProps> = (args) => {
  return (
    <>
      <div
        style={{
          padding: "0.5rem",
        }}
      >
        <Radio
          {...args}
          id="primeiro"
          label="primeiro"
          labelFor="primeiro"
          value="primeiro"
          name="nome"
          defaultChecked
        />
      </div>
      <div
        style={{
          padding: "0.5rem",
        }}
      >
        <Radio
          {...args}
          id="segundo"
          label="segundo"
          labelFor="segundo"
          value="segundo"
          name="nome"
        />
      </div>
      <div
        style={{
          padding: "0.5rem",
        }}
      >
        <Radio
          {...args}
          id="terceiro"
          label="terceiro"
          labelFor="terceiro"
          value="terceiro"
          name="nome"
        />
      </div>
    </>
  );
};
