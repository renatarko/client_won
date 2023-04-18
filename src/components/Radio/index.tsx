import { useState } from "react";
import * as S from "./style";

export type RadioProps = {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
};

const Radio = ({
  label,
  labelFor = "",
  labelColor = "white",
  onCheck,
  isChecked = false,
}: RadioProps) => {
  const [checked, setChecked] = useState(isChecked);

  function OnChanged() {
    const status = checked!;
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        onChange={OnChanged}
        checked={checked}
      />
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    </S.Wrapper>
  );
};

export default Radio;
