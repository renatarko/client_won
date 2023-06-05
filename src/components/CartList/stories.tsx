import { Meta, Story } from "@storybook/react/types-6-0";
import CartList, { CartListProps } from ".";

import mockItems from "./mock";

export default {
  title: "CartList",
  component: CartList,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    items: mockItems,
    total: "330,00",
  },
} as Meta;

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: "80rem", margin: "auto" }}>
    <CartList {...args} />
  </div>
);

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: "80rem", margin: "auto" }}>
    <CartList {...args} hasButton />
  </div>
);

export const Empty: Story = () => (
  <div style={{ maxWidth: "80rem", margin: "auto" }}>
    <CartList />
  </div>
);
