import "match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import bannersMock from "components/BannerSlider/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

import Home from "./index";

const props = {
  banners: [bannersMock[0]],
  newGames: [gamesMock[0]],
  mostpopularHighlight: highlightMock,
  mostpopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcomminMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeGamesHighlight: highlightMock,
};

jest.mock("components/BannerSlider", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>;
    },
  };
});

jest.mock("components/Showcase", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    },
  };
});

describe("<Home/>", () => {
  it("should render banner slider and showcases", () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId("Mock Banner Slider")).toBeInTheDocument();
    expect(screen.getAllByTestId("Mock Showcase")).toHaveLength(5);
  });
});
