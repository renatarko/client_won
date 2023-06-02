import Cart, { CartProps } from "templates/Cart";

import itemsMock from "components/CartList/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";
import paymentOptionMock from "components/PaymentOptions/mock";

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: itemsMock,
      total: "$ 380,00",
      cards: paymentOptionMock,
    },
  };
}
