import Button from "components/Button";
import Heading from "components/Heading";
import Radio from "components/Radio";
import { useState } from "react";
import { ShoppingCart } from "styled-icons/material";
import { Add } from "styled-icons/material-outlined";
import * as S from "./styles";

export type PaymentOptionsProps = {
  cards?: PaymentCard[];
  handlePayment: () => void;
};

export type PaymentCard = {
  img: string;
  flag: string;
  number: string;
};

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom lineColor="secondary" size="small" color="black">
          Payment
        </Heading>
      </S.Body>

      <S.CardList>
        {cards?.map((card) => (
          <S.CardItem key={card.number}>
            <S.CardInfo>
              <img src={card.img} alt={card.flag} />
              {card.number}
            </S.CardInfo>
            <Radio
              name="credit-card"
              id={card.number}
              value={card.number}
              onCheck={() => setChecked(true)}
            />
          </S.CardItem>
        ))}

        <S.AddCard role="button">
          <Add size={14} /> Add a new credit card
        </S.AddCard>
      </S.CardList>
      <S.Footer>
        <Button fullWidth as="a" minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentOptions;
