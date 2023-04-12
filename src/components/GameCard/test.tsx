import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import theme from "styles/theme";
import GameCard from ".";

const props = {
  title: "Read Dead Redemption",
  developer: "Rockstar Games",
  img: "./img/red-dead-img.jpg",
  price: "R$ 215,00",
};

describe("<GameCard/>", () => {
  it("should render title and developer", () => {
    renderWithTheme(<GameCard {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      props.img
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it("should render price in label", () => {
    renderWithTheme(<GameCard {...props} />);

    const price = screen.getByText("R$ 215,00");

    expect(price).not.toHaveStyle({ textDecoration: "line-through" });

    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it("should render a line-through in price when promotional", () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 135,00" />);

    expect(screen.getByText("R$ 215,00")).toHaveStyle({
      textDecoration: "line-through",
    });

    expect(screen.getByText("R$ 135,00")).not.toHaveStyle({
      textDecoration: "line-through",
    });
  });

  it("should render a filled Favorite icon when favorite is true", () => {
    renderWithTheme(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it("should call onFav method when favorite is clicked", () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(onFav).toBeCalled();
  });

  it("should render a Ribbon", () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: "#3CD3C1" });
    expect(ribbon).toHaveStyle({ height: "2.6rem", fontSize: "1.2rem" });
  });
});
