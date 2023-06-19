import { QueryRecommended } from "graphql/queries/generated/QueryRecommended";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import { initializeApollo } from "utils/apollo";

import gamesMock from "components/GameCardSlider/mock";
import Wishlist, { WishlistTemplateProps } from "templates/Wishlist";
import { gamesMapper, highlightMapper } from "utils/mappers/index";

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      recommendedTitle: data.recommended?.section?.title,
    },
  };
}
