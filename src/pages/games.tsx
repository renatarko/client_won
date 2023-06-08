import { QUERY_GAMES } from "graphql/queries/games";
import {
  QueryGames,
  QueryGamesVariables,
} from "graphql/queries/generated/QueryGames";
import { initializeApollo } from "utils/apollo";

import itemsMock from "components/ExploreSidebar/mock";
import GamesTemplate, { GamesTemplateProps } from "templates/Games";

export default function Games(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: game.price,
      })),
      filterItems: itemsMock,
    },
  };
}
