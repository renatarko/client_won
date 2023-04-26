import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import FormSignIn from ".";

describe("FormSignIn", () => {
  it("should render the form", () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  it("should render the forgot password link", () => {
    renderWithTheme(<FormSignIn />);

    expect(
      screen.getByRole("link", { name: /esqueceu sua senha?/i })
    ).toBeInTheDocument();
  });

  it("should render the text and link to sign up", () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByText(/ainda não tem uma conta?/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /cadastre-se/i })
    ).toBeInTheDocument();
  });
});
