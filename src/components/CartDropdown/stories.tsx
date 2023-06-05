import { Meta, Story } from "@storybook/react/types-6-0";
import CartDropdown, { CartDropdownProps } from ".";

import items from "components/CartList/mock";

export default {
  title: "CartDropdown",
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    items,
    total: "R$ 450,00",
  },
} as Meta;

export const Default: Story<CartDropdownProps> = (args) => (
  <div
    style={{
      margin: "auto",
      maxWidth: "98%,",
      display: "flex",
      justifyContent: "end",
    }}
  >
    <CartDropdown {...args} />
  </div>
);

export const Empty: Story<CartDropdownProps> = () => (
  <div
    style={{
      margin: "auto",
      maxWidth: "98%,",
      display: "flex",
      justifyContent: "end",
    }}
  >
    <CartDropdown />
  </div>
);
