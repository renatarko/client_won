import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import FormProfile from ".";

describe("FormSignIn", () => {
  it("should render the profile form", () => {
    renderWithTheme(<FormProfile />);

    expect(
      screen.getByRole("heading", { name: /my profile/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("textbox", { name: /name/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /e-mail/i })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/type your passaword/i)
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/new password/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /save/i })).toBeInTheDocument();
  });
});
