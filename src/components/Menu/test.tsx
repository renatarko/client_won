import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Menu from ".";

describe("<Menu />", () => {
  it("should render the menu", () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Won Games/i })).toBeInTheDocument();
  });

  it("should handle the open/close mobile menu", () => {
    renderWithTheme(<Menu />);

    const menuFullElement = screen.getByRole("navigation", { hidden: true });

    //verificar se o menu está escondido
    expect(menuFullElement.getAttribute("aria-hidden")).toBe("true");
    expect(menuFullElement).toHaveStyle({ opacity: 0 });

    //clicar no botão de abrir o menu e virificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(menuFullElement.getAttribute("aria-hidden")).toBe("false");
    expect(menuFullElement).toHaveStyle({ opacity: 1 });

    //clicar no botão de fechar o menu e virificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(menuFullElement.getAttribute("aria-hidden")).toBe("true");
    expect(menuFullElement).toHaveStyle({ opacity: 0 });
  });
});
