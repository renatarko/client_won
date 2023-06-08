import Base from "templates/Base";

import { Container } from "components/Container";
import { Divider } from "components/Divider";
import Empty from "components/Empty";
import GameCard, { GameCardProps } from "components/GameCard";
import { Grid } from "components/Grid";
import Heading from "components/Heading";
import { HighlightProps } from "components/Highlight";
import Showcase from "components/Showcase";

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
  recommendedTitle: string;
};

const Wishlist = ({
  games = [],
  recommendedHighlight,
  recommendedGames,
  recommendedTitle = "You may like these games",
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games?.length ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Wishlist;
