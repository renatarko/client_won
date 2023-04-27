import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import FormSignUp from ".";

describe("<FormSignUp/>", () => {
  it("should render the form", () => {
    const { container } = renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText(/nome completo/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirmar senha")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /criar conta/i })
    ).toBeInTheDocument();
    expect(container.parentElement).toMatchSnapshot();
  });

  it("should render the text and link to sign in", () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByText(/já tem uma conta?/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /entrar/i })).toBeInTheDocument();
  });
});
