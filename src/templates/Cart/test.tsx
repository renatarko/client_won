import "match-media-mock";
import { renderWithTheme } from "utils/tests/helpers";
import Cart from ".";

import { screen } from "@testing-library/react";
import itemsMock from "components/CartList/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";
import paymentOptionMock from "components/PaymentOptions/mock";
import React from "react";

const props = {
  recommendedGames: gamesMock.slice(0, 2),
  recommendedHighlight: highlightMock,
  items: itemsMock,
  total: "$ 430,00",
  cards: paymentOptionMock,
  recommendedTitle: "You may like these games",
};

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock("components/CartList", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CartList"></div>;
    },
  };
});

jest.mock("components/PaymentOptions", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentOptions"></div>;
    },
  };
});

jest.mock("components/Showcase", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    },
  };
});

jest.mock("components/Empty", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty"></div>;
    },
  };
});

describe("<Cart/>", () => {
  it("should render sections", () => {
    renderWithTheme(<Cart {...props} />);

    expect(
      screen.getByRole("heading", { name: /my cart/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("Mock CartList")).toBeInTheDocument();
    expect(screen.getByTestId("Mock PaymentOptions")).toBeInTheDocument();
    expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument();
    expect(screen.queryByTestId("Mock Empty")).not.toBeInTheDocument();
  });

  it("should render empty sections if there are no items", () => {
    renderWithTheme(<Cart {...props} items={[]} />);

    expect(screen.getByTestId("Mock Empty")).toBeInTheDocument();
  });
});
