import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import itemsMock from "./mock";

import CartList from ".";

describe("<Empty/>", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(
      <CartList items={itemsMock} total="R$ 330,00" />
    );

    expect(screen.getAllByRole("heading")).toHaveLength(2);
    expect(screen.getByText("R$ 330,00")).toHaveStyle({ color: "#F231A5" });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the button", () => {
    renderWithTheme(<CartList items={itemsMock} total="R$ 330,00" hasButton />);

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
  });

  it("should render empty if there are no games", () => {
    renderWithTheme(<CartList />);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
  });
});
