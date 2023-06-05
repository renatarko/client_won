import { renderWithTheme } from "utils/tests/helpers";

import { screen } from "@testing-library/react";

import CartIcon from ".";

describe("<CartIcon/>", () => {
  it("should render without badge", () => {
    renderWithTheme(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it("should render with badge", () => {
    renderWithTheme(<CartIcon quantity={2} />);

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText(/2/)).toBeInTheDocument();
  });

  it("should render with badge only if has positive numbers", () => {
    renderWithTheme(<CartIcon quantity={-1} />);

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/-1/)).not.toBeInTheDocument();
  });
});
