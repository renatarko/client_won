import { BannerProps } from "components/Banner";
import BannerSlider from "components/BannerSlider";
import { Container } from "components/Container";
import Footer from "components/Footer";
import { GameCardProps } from "components/GameCard";
import GameCardSlider from "components/GameCardSlider";
import Heading from "components/Heading";
import Highlight, { HighlightProps } from "components/Highlight";
import Menu from "components/Menu";

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
        <BannerSlider items={banners} />
      </Container>

      <Container>
        <Heading lineLeft color="black" lineColor="secondary">
          New Realeases
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Populars
        </Heading>
        <Highlight {...mostpopularHighlight} />
        <GameCardSlider items={mostpopularGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Comming Soon
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighlight} />
        <GameCardSlider items={upcomminMoreGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight {...freeGamesHighlight} />
        <GameCardSlider items={freeGames} />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  );
};

export default Home;
