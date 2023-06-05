import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import userEvent from "@testing-library/user-event";
import Dropdown from ".";

describe("<CartIcon/>", () => {
  beforeEach(() => {
    const title = <h1 aria-label="toggle dropdown">Click here</h1>;
    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    );
  });

  it("should render title", () => {
    expect(screen.getByLabelText(/toggle dropdown/i)).toBeInTheDocument();
  });

  it("should handle open/close dropdown", async () => {
    const content = screen.getByText(/content/).parentElement!;

    expect(content).toHaveStyle({
      opacity: 0,
    });

    expect(content.getAttribute("aria-hidden")).toBe("true");

    await userEvent.click(screen.getByLabelText(/toggle dropdown/));

    expect(content).toHaveStyle({
      opacity: 1,
    });
    expect(content.getAttribute("aria-hidden")).toBe("false");
  });
});
