import Button from "components/Button";
import * as S from "./styles";
import React from "react";
import Ribbon, { RibbonColors, RibbonSizes } from "components/Ribbon";

export type BannerPropos = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "normal",
}: BannerPropos) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
);

export default Banner;
