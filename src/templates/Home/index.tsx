import { BannerProps } from "components/Banner";
import BannerSlider from "components/BannerSlider";
import { Container } from "components/Container";
import { GameCardProps } from "components/GameCard";
import { HighlightProps } from "components/Highlight";
import Showcase from "components/Showcase";
import Base from "templates/Base";

import * as S from "./styles";

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostpopularHighlight: HighlightProps;
  mostpopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  freeGames: GameCardProps[];
  freeGamesHighlight: HighlightProps;
  newGamesTitle: string;
  mostPopularGamesTitle: string;
  upcomingGamesTitle: string;
  freeGamesTitle: string;
};

const Home = ({
  banners,
  newGames,
  mostpopularHighlight,
  mostpopularGames,
  upcommingGames,
  upcommingHighlight,
  freeGames,
  freeGamesHighlight,
  newGamesTitle,
  mostPopularGamesTitle,
  upcomingGamesTitle,
  freeGamesTitle,
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title={newGamesTitle} games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title={mostPopularGamesTitle}
        highlight={mostpopularHighlight}
        games={mostpopularGames}
      />

      <Showcase
        title={upcomingGamesTitle}
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <Showcase
        title={freeGamesTitle}
        highlight={freeGamesHighlight}
        games={freeGames}
      />
    </Base>
  );
};

export default Home;
