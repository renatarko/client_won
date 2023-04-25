import React, { InputHTMLAttributes, useState } from "react";
import * as S from "./style";

export type TextFieldProps = {
  label?: string;
  labelFor?: string;
  valueInicial?: string;
  onInput?: (value: string) => void;
  icon?: React.ReactNode;
  iconPosition?: "right" | "left";
  disabled?: boolean;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor,
  valueInicial = "",
  onInput,
  icon,
  iconPosition = "left",
  disabled = false,
  errorMessage,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(valueInicial);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;

    setValue(newValue);

    !!onInput && onInput(newValue);
  };
  return (
    <S.Wrapper disabled={disabled} errorMessage={!!errorMessage}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Wrapper>
  );
};

export default TextField;
