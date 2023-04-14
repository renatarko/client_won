import { BannerProps } from "components/Banner";
import BannerSlider from "components/BannerSlider";
import { Container } from "components/Container";
import Footer from "components/Footer";
import { GameCardProps } from "components/GameCard";
import GameCardSlider from "components/GameCardSlider";
import Heading from "components/Heading";
import Highlight, { HighlightProps } from "components/Highlight";
import Menu from "components/Menu";
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
    <section>
      <Container>
        <Menu></Menu>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            New Realeases
          </Heading>
          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most Populars
          </Heading>
          <Highlight {...mostpopularHighlight} />
          <GameCardSlider items={mostpopularGames} />
        </S.SectionMostPopular>
      </Container>

      <Container>
        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary">
            Comming Soon
          </Heading>
          <GameCardSlider items={upcommingGames} />
          <Highlight {...upcommingHighlight} />
          <GameCardSlider items={upcomminMoreGames} />
        </S.SectionUpcoming>
      </Container>

      <Container>
        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free Games
          </Heading>
          <Highlight {...freeGamesHighlight} />
          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
};

export default Home;
