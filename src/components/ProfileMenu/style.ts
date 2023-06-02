import styled, { DefaultTheme, css } from "styled-components";
import media from "styled-media-query";

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    ${media.greaterThan("medium")`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`;

const modifiersLink = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
  `,
  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
};

type LinkProps = {
  isActive?: boolean;
};

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    background-color: ${theme.colors.white};
    text-decoration: none;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    ${media.lessThan("medium")`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}

    ${!isActive && modifiersLink.default(theme)}
    ${isActive && modifiersLink.active(theme)}
  `}
`;
