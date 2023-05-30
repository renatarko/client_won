import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import GameDetails, { GameDetailsProps } from ".";

const props: GameDetailsProps = {
  developer: "Different Tales",
  publisher: "Walktrough",
  platforms: ["windows", "mac", "linux"],
  releaseDate: "2020-11-21T23:00:00",
  rating: "BR0",
  genres: ["Role-playing", "Narrative"],
};

describe("<GameDetails/>", () => {
  it("should render the blocks", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(
      screen.getByRole("heading", { name: /developer/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /data de lançamento/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /plataformas/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /editoras/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /classificação/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /categoria/i })
    ).toBeInTheDocument();
  });

  it("should render platforms icons", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByTestId("icon linux")).toBeInTheDocument();
    expect(screen.getByTestId("icon mac")).toBeInTheDocument();
    expect(screen.getByTestId("icon windows")).toBeInTheDocument();
  });

  it("should render the formated date", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText("Nov 21, 2020")).toBeInTheDocument();
  });

  it("should render free rating when BR0", () => {
    renderWithTheme(<GameDetails {...props} rating="BR0" />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it("should render the publisher", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/walktrough/i)).toBeInTheDocument();
  });

  it("should render the developer", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/different tales/i)).toBeInTheDocument();
  });

  it("should render 18+ rating when BR18", () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it("should render a list of genres", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText("Role-playing / Narrative")).toBeInTheDocument();
  });
});
