import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Home from "./index";

describe("<Home/>", () => {
  it("should render menu and footer", () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();
  });

  it("should render the sections", () => {
    renderWithTheme(<Home />);

    expect(screen.getByRole("heading", { name: /new realeases/i })).toHaveStyle(
      {
        color: "#030517",
      }
    );
    expect(screen.getByRole("heading", { name: /most populars/i })).toHaveStyle(
      {
        color: "#FAFAFA",
      }
    );
    expect(screen.getByRole("heading", { name: /comming soon/i })).toHaveStyle({
      color: "#FAFAFA",
    });
    expect(screen.getByRole("heading", { name: /free games/i })).toHaveStyle({
      color: "#FAFAFA",
    });
  });
});
