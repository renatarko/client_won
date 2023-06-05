import { Meta, Story } from "@storybook/react/types-6-0";
import CartIcon from ".";

import cardMock from "components/PaymentOptions/mock";

export default {
  title: "CartIcon",
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: { cards: cardMock },
} as Meta;

export const Default: Story = () => (
  <div style={{ maxWidth: "80rem", margin: "auto" }}>
    <CartIcon />
  </div>
);

export const WithItems: Story = (args) => (
  <div style={{ maxWidth: "80rem", margin: "auto" }}>
    <CartIcon {...args} />
  </div>
);

WithItems.args = {
  quantity: 3,
};
