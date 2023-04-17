import * as S from "./style";

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
};

const Checkbox = ({ label, labelFor = "" }: CheckboxProps) => {
  return (
    <S.Wrapper>
      <input id={labelFor} type="checkbox" />
      <label htmlFor={labelFor}>{label}</label>
    </S.Wrapper>
  );
};

export default Checkbox;
