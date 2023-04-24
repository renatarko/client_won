import { InputHTMLAttributes } from "react";
import * as S from "./style";

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value: RadioValue) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  label,
  labelFor = "",
  labelColor = "white",
  onCheck,
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value!);
  };

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        onChange={onChange}
        value={value}
        {...props}
      />
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    </S.Wrapper>
  );
};

export default Radio;
