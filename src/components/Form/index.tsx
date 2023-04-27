import styled, { css } from "styled-components";

import * as ButtonStyles from "components/Button/styles";
import * as TextFieldStyles from "components/TextField/style";
import { darken } from "polished";

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;

export const LinkForm = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: center;

    & a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      margin-left: 0.3rem;
      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`;
