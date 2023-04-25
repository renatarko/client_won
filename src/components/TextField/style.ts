import styled, { DefaultTheme, css } from "styled-components";
import { TextFieldProps } from ".";

type IconPositionProps = Pick<TextFieldProps, "iconPosition">;

type WrapperProps = Pick<TextFieldProps, "disabled"> & {
  errorMessage?: boolean;
};

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label}, ${Input}, ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  errorMessage: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.error};
    }

    ${Icon}, ${Label} {
      color: ${theme.colors.error};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, errorMessage }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${errorMessage && wrapperModifiers.errorMessage(theme)}
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.1rem;
    color: ${theme.colors.gray};
    justify-content: flex-end;
    order: ${iconPosition === "right" ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
    margin-left: 0.5rem;
  `}
`;
