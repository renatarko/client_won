import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";
import * as S from "./styles";

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: JSX.Element;
  minimal?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    minimal = false,
    size = "medium",
    fullWidth = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    minimal={minimal}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default forwardRef(Button);
