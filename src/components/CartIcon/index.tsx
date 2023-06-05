import { ShoppingCart } from "styled-icons/material-outlined";
import * as S from "./style";

export type CartIconProps = {
  quantity?: number;
};

const CartIcon = ({ quantity = 0 }: CartIconProps) => {
  return (
    <S.Wrapper>
      {quantity > 0 && <S.Badge aria-label="cart items">{quantity}</S.Badge>}
      <ShoppingCart aria-label="shopping cart" />
    </S.Wrapper>
  );
};

export default CartIcon;
