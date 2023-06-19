import { QueryRecommended } from "graphql/queries/generated/QueryRecommended";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import Cart, { CartProps } from "templates/Cart";
import { initializeApollo } from "utils/apollo";
import { gamesMapper, highlightMapper } from "utils/mappers/index";

import itemsMock from "components/CartList/mock";
import paymentOptionMock from "components/PaymentOptions/mock";

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      recommendedTitle: data.recommended?.section?.title,
      items: itemsMock,
      total: "$ 380,00",
      cards: paymentOptionMock,
    },
  };
}
