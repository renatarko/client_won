import "match-media-mock";
import { renderWithTheme } from "utils/tests/helpers";

import Gallery from ".";

import { fireEvent, screen } from "@testing-library/react";
import mockItems from "./mock";

describe("<Gallery/>", () => {
  it("should render thumbnails as buttons", () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    expect(
      screen.getByRole("button", { name: /thumb - Gallery Image 1/i })
    ).toHaveAttribute("src", mockItems[0].src);

    expect(
      screen.getByRole("button", { name: /thumb - Gallery Image 2/i })
    ).toHaveAttribute("src", mockItems[1].src);
  });

  it("should handle open/close modal", () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    const modal = screen.getByLabelText("modal");

    //verificar se o modal está escondido
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });

    //clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole("button", { name: /thumb - Gallery Image 1/i })
    );
    expect(modal.getAttribute("aria-hidden")).toBe("false");
    expect(modal).toHaveStyle({ opacity: 1 });
  });

  it("should handle close modal overlay or button clicked", () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    const modal = screen.getByLabelText("modal");

    //clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole("button", { name: /thumb - Gallery Image 1/i })
    );

    //clicar para fechar o modal
    fireEvent.click(screen.getByRole("button", { name: /close modal/i }));
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });
  });

  it("should open modal with selected image", async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />);

    //clicar no thumbnail
    fireEvent.click(
      screen.getByRole("button", { name: /thumb - Gallery Image 2/i })
    );

    //espero que a imagem da thumbnail seja aberta
    const img = await screen.findByRole("img", { name: /Gallery Image 2/i });
    expect(img.parentElement?.parentElement).toHaveClass("slick-active");
  });

  it("should handle close modal when ESC button is pressed", () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    );

    const modal = screen.getByLabelText("modal");

    //clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole("button", { name: /thumb - Gallery Image 1/i })
    );

    //pressionar ESC para fechar o modal
    fireEvent.keyUp(container, { key: "Escape" });
    expect(modal.getAttribute("aria-hidden")).toBe("true");
    expect(modal).toHaveStyle({ opacity: 0 });
  });
});
