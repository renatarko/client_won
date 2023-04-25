import { Meta, Story } from "@storybook/react/types-6-0";
import { EnvelopeFill } from "styled-icons/bootstrap";
import TextField, { TextFieldProps } from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    id: "email",
    label: "E-mail",
    labelFor: "email",
    initialValue: "",
    placeholder: "Digite seu e-mail",
    icon: <EnvelopeFill />,
  },
  argTypes: {
    onInput: { action: "changed" },
    icon: { type: "boolean" },
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ width: "50vw" }}>
    <TextField {...args} />
  </div>
);

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ width: "50vw" }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  errorMessage: "Ops... something is wrong",
};
