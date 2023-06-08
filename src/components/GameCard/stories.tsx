import { Meta, Story } from "@storybook/react/types-6-0";
import GameCard, { GameCardProps } from ".";

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    slug: "read-dead-redemption",
    title: "Read Dead Redemption",
    developer: "Rockstar Games",
    img: "./img/red-dead-img.jpg",
    price: "R$ 215,00",
    promotionalPrice: "R$ 135,00",
  },
  argTypes: {
    onFav: { action: "clicked" },
    ribbon: { type: "string" },
  },
} as Meta;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonColor: "secondary",
  ribbonSize: "small",
};
