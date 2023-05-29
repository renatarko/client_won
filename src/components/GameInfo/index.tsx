import Button from "components/Button";
import Heading from "components/Heading";
import Ribbon from "components/Ribbon";
import { AddShoppingCart, FavoriteBorder } from "styled-icons/material";

import * as S from "./styles";

export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>

      <Ribbon color="secondary">{`$${price}`}</Ribbon>

      <S.Description>{description}</S.Description>

      <S.WrapperButtons>
        <Button size="large" icon={<AddShoppingCart />}>
          Adcionar
        </Button>
        <Button size="large" minimal icon={<FavoriteBorder />}>
          Lista de desejos
        </Button>
      </S.WrapperButtons>
    </S.Wrapper>
  );
};

export default GameInfo;
