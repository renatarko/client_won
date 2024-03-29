import { Meta, Story } from "@storybook/react/types-6-0";

import { Settings } from "react-slick";
import styled from "styled-components";
import Slider from ".";

export default {
  title: "Slider",
  component: Slider,
} as Meta;

const setting: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background-color: gray;
  border: 1px solid red;
  padding: 10rem 0;
  width: 30rem;
  color: white;
  text-align: center;
`;

export const Horizontal: Story = () => (
  <Slider settings={setting}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1,
};

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
);
