import { Meta, Story } from "@storybook/react/types-6-0";

import GameItem, { GameItemProps } from ".";

export default {
  title: "GameItem",
  component: GameItem,
  args: {
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    title: "Game Title",
    price: "R$ 250,00",
  },
} as Meta;

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />;

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
);

WithPayment.args = {
  downloadLink: "https://link.com",
  paymentInfo: {
    number: "**** **** **** 4324",
    flag: "mastercard",
    img: "/img/master-card.png",
    purchaseDate: "Purchase made on 07/20/2020 at 20:32",
  },
};
