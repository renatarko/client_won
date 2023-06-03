import { Meta, Story } from "@storybook/react/types-6-0";
import CardsList, { CardsListProps } from ".";

import cardMock from "components/PaymentOptions/mock";

export default {
  title: "Profile/CardsList",
  component: CardsList,
  // parameters: {
  //   backgrounds: {
  //     default: "won-dark",
  //   },
  // },
  args: { cards: cardMock },
} as Meta;

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: "80rem", margin: "auto" }}>
    <CardsList {...args} />
  </div>
);
