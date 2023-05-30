import Slider, { SliderSettings } from "components/Slider";

import { useEffect, useRef, useState } from "react";
import SlickSlider from "react-slick";

import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRigth,
} from "styled-icons/material";
import { Close } from "styled-icons/material-outlined";

import * as S from "./style";

const commumnSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: "ondemand",
  nextArrow: (
    <span>
      <ArrowRigth aria-label="next images" />
    </span>
  ),
  prevArrow: (
    <span>
      <ArrowLeft aria-label="previous images" />
    </span>
  ),
};

const settings: SliderSettings = {
  ...commumnSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
};

const modalSettings: SliderSettings = {
  ...commumnSettings,
  slidesToShow: 1,
};

export type GalleryImagesProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImagesProps[];
};

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === "Escape" && setIsOpen(false);
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            key={`Thumb - ${index}`}
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true);
              slider.current!.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery - ${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Gallery;
