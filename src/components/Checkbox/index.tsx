import { InputHTMLAttributes, useState } from "react";
import * as S from "./style";

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  onCheck,
  label,
  labelFor = "",
  labelColor = "white",
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  function onChange() {
    const status = !checked;
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
