import { Meta, Story } from "@storybook/react/types-6-0";
import GameInfo, { GameInfoProps } from ".";

export default {
  title: "Game/GameInfo",
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: "won-dark",
    },
  },
  args: {
    title: "Game Info",
    description:
      "Agora é a hora de eliminar Handsome Jack.  Reúna seus amigos para correr desenfreadamente pelo mundo coletando milhões de iten.",
    price: "210.00",
  },
} as Meta;

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: "144rem", padding: "1.5rem" }}>
    <GameInfo {...args} />
  </div>
);
