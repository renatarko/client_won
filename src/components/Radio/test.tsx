import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import theme from "styles/theme";
import { renderWithTheme } from "utils/tests/helpers";
import Radio from ".";

describe("<Radio/>", () => {
  it("should render with label", () => {
    renderWithTheme(<Radio label="Radio" labelFor="radioFor" />);

    expect(screen.getByRole("radio")).toBeInTheDocument();
    expect(screen.getByLabelText(/radio/i)).toBeInTheDocument();
    expect(screen.getByText(/radio/i)).toHaveAttribute("for", "radioFor");
  });

  it("should render without label", () => {
    renderWithTheme(<Radio />);

    expect(screen.queryByLabelText("Radio")).not.toBeInTheDocument();
  });

  it("should render with label white", () => {
    renderWithTheme(<Radio label="Radio" labelColor="white" />);

    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("should render with label black", () => {
    renderWithTheme(<Radio label="Radio" labelColor="black" />);

    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: theme.colors.black,
    });
  });

  it("should dispatch onCheck when label status changes", async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Radio label="Radio" labelFor="Radio" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByLabelText("Radio"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });
});
