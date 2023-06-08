import { useRouter } from "next/router";
import Game, { GameTemplateProps } from "templates/Game";
import { initializeApollo } from "utils/apollo";

import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "graphql/queries/games";
import {
  QueryGameBySlug,
  QueryGameBySlugVariables,
} from "graphql/queries/generated/QueryGameBySlug";
import {
  QueryGames,
  QueryGamesVariables,
} from "graphql/queries/generated/QueryGames";
import { QueryRecommended } from "graphql/queries/generated/QueryRecommended";
import {
  QueryUpcoming,
  QueryUpcomingVariables,
} from "graphql/queries/generated/QueryUpcoming";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import { QUERY_UPCOMING } from "graphql/queries/upcoming";
import { GetStaticProps } from "next";
import { gamesMapper, highlightMapper } from "utils/mappers";

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();

  //se a rota não tiver sido gerado, mostrar alguma coisa
  if (router.isFallback) return null;

  return <Game {...props} />;
}

// gera as urls dos jogos
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  });

  const paths = data.games.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // get game data
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
  });

  if (!data.games.length) {
    return { notFound: true };
  }

  const game = data.games[0];

  // get recommended games
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  // get upcoming games e highlight
  const TODAY = new Date().toISOString().slice(0, 10);
  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: { date: TODAY },
  });

  return {
    props: {
      revalidate: 60,
      cover: game.cover?.src,
      gameInfo: {
        title: game.name,
        description: game.short_description,
        price: game.price,
      },
      gallery: game.gallery.map((image) => ({
        src: image.src,
        labe: image.label,
      })),
      description: game.description,
      details: {
        developer: game.developers.map((dev) => dev.name),
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name),
      },
      upcomingTitle: upcoming.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showcase?.upcomingGames?.highlight
      ),
      recommendedGames: gamesMapper(recommended.recommended?.section?.games),
      recommendedTitle: recommended.recommended?.section?.title,
    },
  };
};
