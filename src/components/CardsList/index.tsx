import Heading from "components/Heading";
import { PaymentCard } from "components/PaymentOptions";
import * as S from "./style";

export type CardsListProps = {
  cards?: PaymentCard[];
};

const CardsList = ({ cards }: CardsListProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="secondary" color="black">
        My cards
      </Heading>

      {cards?.map((card) => {
        return (
          <S.Card key={card.number}>
            <img src={card.img} alt={card.flag} />
            <span>{card.number}</span>
          </S.Card>
        );
      })}
    </S.Wrapper>
  );
};

export default CardsList;
