import * as S from "./styles";

export type LineColor = "primary" | "secondary";

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  size?: "small" | "medium" | "huge";
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColor;
};

const Heading = ({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  size = "medium",
  lineColor = "primary",
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
