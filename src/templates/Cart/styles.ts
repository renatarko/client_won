import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div``;

export const Content = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.large};

    ${media.greaterThan("medium")`
      grid-template-columns: 2fr 1fr;
    `}
  `}
`;
