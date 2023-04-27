import styled, { css } from "styled-components";

import * as HeadingStyles from "components/Heading/styles";
import * as LogoStyles from "components/Logo/styles";
import media from "styled-media-query";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan("medium")`
  grid-template-columns: 1fr 1fr;
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan("medium")`
      display: none;
    `}

    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Footer = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  align-self: end;
  text-align: center;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    justify-content: center;
    align-items: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan("medium")`
      width: 36rem;
    `}

    ${HeadingStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${LogoStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
      width: 100%;
      display: flex;
      justify-content: center;
    }
  `}
`;
