import { renderWithTheme } from "utils/tests/helpers";

import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

import { screen } from "@testing-library/react";
import Wishlist from ".";

const props = {
  games: gamesMock.slice(0, 4),
  recommendedGames: gamesMock.slice(0, 2),
  recommendedHighlight: highlightMock,
  recommendedTitle: "You may like these like",
};

jest.mock("components/Showcase", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    },
  };
});

describe("<Wishlist />", () => {
  it("should render correctly", () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(
      screen.getByRole("heading", { name: /wishlist/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/population zero/i)).toHaveLength(4);
    expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument();
  });

  it("should render empty when there are no games", () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
        recommendedTitle="You may like these like"
      />
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /your wishlist is empty/i })
    ).toBeInTheDocument();
  });
});
