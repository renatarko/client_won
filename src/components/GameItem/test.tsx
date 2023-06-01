import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import GameItem from ".";

const props = {
  img: "https://source.unsplash.com/user/willianjusten/300x140",
  title: "Title game",
  price: "210,00",
};

describe("GameItem", () => {
  it("should render the item", () => {
    renderWithTheme(<GameItem {...props} />);

    expect(screen.getByRole("img", { name: /Title game/i })).toHaveAttribute(
      "src",
      props.img
    );
    expect(
      screen.getByRole("heading", { name: /title game/i })
    ).toBeInTheDocument();
    expect(screen.getByText("210,00")).toBeInTheDocument();
  });

  it("should render the item with download link", () => {
    const downloadLink = "https://link.com";

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />);

    expect(
      screen.getByRole("link", { name: `download ${props.title} here` })
    ).toHaveAttribute("href", downloadLink);
  });

  it("should render the item with download link", () => {
    const paymentInfo = {
      number: "**** **** **** 4324",
      flag: "mastercard",
      img: "/img/master-card.png",
      purchaseDate: "Purchase made on 07/20/2020 at 20:32",
    };

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />);

    expect(
      screen.getByRole("img", { name: `${paymentInfo.flag}` })
    ).toHaveAttribute("src", paymentInfo.img);
  });
});
