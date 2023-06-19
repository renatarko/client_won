import {
  QueryHome,
  QueryHomeVariables,
} from "graphql/queries/generated/QueryHome";
import { QUERY_HOME } from "graphql/queries/home";

import Home, { HomeTemplateProps } from "templates/Home";
import { initializeApollo } from "utils/apollo";
import { bannerMapper, gamesMapper, highlightMapper } from "utils/mappers";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY },
  });

  return {
    props: {
      revalidate: 10,
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections?.newGames?.title,
      mostpopularHighlight: highlightMapper(sections?.freeGames?.highlight),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostpopularGames: gamesMapper(sections!.popularGames!.games),
      upcommingGames: gamesMapper(upcomingGames),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcommingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGames: gamesMapper(freeGames),
      freeGamesTitle: sections?.freeGames?.title,
      freeGamesHighlight: highlightMapper(sections?.freeGames?.highlight),
    },
  };
}
