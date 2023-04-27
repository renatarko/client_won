import { lighten } from "polished";
import styled, { css } from "styled-components";

export const ForgorPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`;
