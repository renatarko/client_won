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
  upcomminMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeGamesHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  mostpopularHighlight,
  mostpopularGames,
  upcommingGames,
  upcommingHighlight,
  upcomminMoreGames,
  freeGames,
  freeGamesHighlight,
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="New Realeases" games={newGames} />
      </S.SectionNews>

      <Showcase
        title="Most Populars"
        highlight={mostpopularHighlight}
        games={mostpopularGames}
      />

      <S.SectionUpcoming>
        <Showcase title="Comming Soon" games={upcommingGames} />
        <Showcase highlight={upcommingHighlight} games={upcomminMoreGames} />
      </S.SectionUpcoming>

      <Showcase
        title="Free Games"
        highlight={freeGamesHighlight}
        games={freeGames}
      />
    </Base>
  );
};

export default Home;
