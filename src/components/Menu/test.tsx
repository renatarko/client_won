import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Menu from ".";

describe("<Menu />", () => {
  it("should render the menu", () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2);
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

it("should show register box when logged out", () => {
  renderWithTheme(<Menu />);

  expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument();
  expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
});

it("should show my account and wishlist when logged in", () => {
  renderWithTheme(<Menu username="renata" />);
  expect(screen.getAllByText(/my profile/i)).toHaveLength(2);
  expect(screen.getAllByText(/wishlist/i)).toHaveLength(2);

  expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
});
