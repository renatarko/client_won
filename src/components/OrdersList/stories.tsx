import { Meta, Story } from "@storybook/react/types-6-0";

import OrdersList, { OrdersListProps } from ".";
import cardsMock from "./mock";

export default {
  title: "Profile/OrdersList",
  component: OrdersList,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    items: cardsMock,
  },
} as Meta;

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ margin: "auto", maxWidth: 850 }}>
    <OrdersList {...args} />
  </div>
);
