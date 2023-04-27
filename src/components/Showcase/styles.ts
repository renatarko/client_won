import styled, { css } from "styled-components";
import media from "styled-media-query";

import { Container } from "components/Container";
import * as GameCardSliderStyles from "components/GameCardSlider/styles";
import * as HeadingStyles from "components/Heading/styles";
import * as HighlightStyles from "components/Highlight/styles";

export const Wrapper = styled(Container).attrs({ as: "section" })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper},
  ${HighlightStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Wrapper} {
      ${media.lessThan("medium")`
        margin-left: calc(-${theme.grid.gutter} / 2);
        margin-rigth: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan("huge")`
        margin-rigth: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`;
