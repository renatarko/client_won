import "match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import items from "components/ExploreSidebar/mock";
import games from "components/GameCardSlider/mock";
import GamesTemplate from ".";

jest.mock("components/ExploreSidebar", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ExploreSidebar" />;
    },
  };
});

jest.mock("components/GameCard", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameCard" />;
    },
  };
});

describe("<Games/>", () => {
  it("should render sections", () => {
    renderWithTheme(
      <GamesTemplate games={games.splice(0, 2)} filterItems={items} />
    );

    expect(screen.getByTestId("Mock ExploreSidebar")).toBeInTheDocument();
    expect(screen.getAllByTestId("Mock GameCard")).toHaveLength(2);
    expect(
      screen.getByRole("button", { name: /show more/i })
    ).toBeInTheDocument();
  });
});
