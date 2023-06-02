import { Meta, Story } from "@storybook/react/types-6-0";

import PaymentOptions, { PaymentOptionsProps } from ".";
import cardsMock from "./mock";

export default {
  title: "PaymentOptions",
  component: PaymentOptions,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    cards: cardsMock,
  },
} as Meta;

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
);
