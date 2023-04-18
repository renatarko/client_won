import styled, { css } from "styled-components";
import { RadioProps } from ".";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 50%;
    background: transparent;
    border: 0.2rem solid ${theme.colors.primary};
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
    &:before {
      content: "";
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<RadioProps, "labelColor">>`
  ${({ theme, labelColor }) => css`
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
    line-height: 1;
    cursor: pointer;
  `}
`;
