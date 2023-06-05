import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import userEvent from "@testing-library/user-event";
import UserDropdown from ".";

describe("<UserDropdwon/>", () => {
  it("should render the username", () => {
    renderWithTheme(<UserDropdown username="Renata" />);

    expect(screen.getByText(/renata/i)).toBeInTheDocument();
  });

  it("should render the menu", async () => {
    renderWithTheme(<UserDropdown username="Renata" />);

    await userEvent.click(screen.getByText(/renata/i));

    expect(
      screen.getByRole("link", { name: /my profile/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /sign out/i })).toBeInTheDocument();
  });
});
