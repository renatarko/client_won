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

describe("<Home/>", () => {
  it("should render menu and footer", () => {
    renderWithTheme(<Home {...props} />);

    //menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    //footer
    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();

    //should render the sections
    expect(screen.getByRole("heading", { name: /new realeases/i })).toHaveStyle(
      {
        color: "#030517",
      }
    );
    expect(screen.getByRole("heading", { name: /most populars/i })).toHaveStyle(
      {
        color: "#FAFAFA",
      }
    );
    expect(screen.getByRole("heading", { name: /comming soon/i })).toHaveStyle({
      color: "#FAFAFA",
    });
    expect(screen.getByRole("heading", { name: /free games/i })).toHaveStyle({
      color: "#FAFAFA",
    });

    // render section elements
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    expect(screen.getAllByText(/read dead it's back/i)).toHaveLength(3);
  });
});
