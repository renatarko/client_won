import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import Auth from ".";

describe("<Auth/>", () => {
  it("should render all components and children", () => {
    renderWithTheme(
      <Auth title="title auth">
        <input type="text" />
      </Auth>
    );

    expect(screen.queryAllByRole("img")).toHaveLength(2);

    expect(
      screen.getByRole("heading", {
        name: /seus jogos favoritos em um só lugar/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /a won é a melhor e mais completa plataforma de games./i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /title auth/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
