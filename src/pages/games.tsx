import GamesTemplate, { GamesTemplateProps } from "templates/Games";

import itemsMock from "components/ExploreSidebar/mock";
import gamesMock from "components/GameCardSlider/mock";

export default function Games(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: itemsMock,
    },
  };
}
