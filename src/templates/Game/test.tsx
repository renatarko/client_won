import "match-media-mock";

import { renderWithTheme } from "utils/tests/helpers";

import galleryMock from "components/Gallery/mock";
import gamesMock from "components/GameCardSlider/mock";
import gameDetailsMock from "components/GameDetails/mock";
import gameInfoMock from "components/GameInfo/mock";
import highlightMock from "components/Highlight/mock";

import { screen } from "@testing-library/react";
import Game, { GameTemplateProps } from ".";

const props: GameTemplateProps = {
  cover: "bg-image.jpg",
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom Html</h1>`,
  details: gameDetailsMock,
  upcomingTitle: "Upcoming",
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  recommendedGames: gamesMock,
  recommendedTitle: "You may like these games",
};

jest.mock("components/Menu", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>;
    },
  };
});

jest.mock("components/Gallery", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery"></div>;
    },
  };
});

jest.mock("components/GameDetails", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails"></div>;
    },
  };
});

jest.mock("components/GameInfo", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo"></div>;
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

describe("<Game/>", () => {
  it("should render the template with components", () => {
    renderWithTheme(<Game {...props} />);

    expect(screen.getByTestId(/mock gallery/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock gamedetails/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock gameinfo/i)).toBeInTheDocument();
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(2);
    expect(screen.getByText(/custom html/i)).toBeInTheDocument();
  });

  it("should not render the gallery if no images", () => {
    renderWithTheme(<Game {...props} gallery={undefined} />);

    expect(screen.queryByTestId(/mock gallery/i)).not.toBeInTheDocument();
  });

  it("should not render the gallery on mobile", () => {
    renderWithTheme(<Game {...props} />);

    expect(screen.getByTestId("Mock Gallery").parentElement).toHaveStyle({
      display: "none",
    });

    expect(screen.getByTestId("Mock Gallery").parentElement).toHaveStyleRule(
      "display",
      "block",
      {
        media: "(min-width: 768px)",
      }
    );
  });

  it("should render the cover image", () => {
    renderWithTheme(<Game {...props} />);

    const cover = screen.getByRole("img", { name: /cover/i });

    expect(cover).toHaveStyle({
      backgroundImage: "url(bg-image.jpg)",
      height: "39.5rem",
    });

    expect(cover).toHaveStyleRule("height", "70rem", {
      media: "(min-width: 768px)",
    });

    expect(cover).toHaveStyleRule(
      "clip-path",
      "polygon(0 0,100% 0,100% 100%,0 85%)",
      {
        media: "(min-width: 768px)",
      }
    );
  });
});
