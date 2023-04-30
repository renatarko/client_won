import "match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import GameCardSlider from ".";

import items from "./mock";

describe("<GameCardSlider/>", () => {
  it("should render with 4 active items", () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);

    expect(container.querySelectorAll(".slick-slide")).toHaveLength(6);
  });

  it("should render with arrows if color passed", () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: "#FAFAFA",
    });

    // expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
    //   color: "#FAFAFA",
    // });
  });
});
