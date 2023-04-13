import bannersMock from "components/BannerSlider/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

import Home, { HomeTemplateProps } from "templates/Home";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostpopularHighlight: highlightMock,
      mostpopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighlight: highlightMock,
      upcomminMoreGames: gamesMock,
      freeGames: gamesMock,
      freeGamesHighlight: highlightMock,
    },
  };
}
