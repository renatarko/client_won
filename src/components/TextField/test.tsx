import { screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { EnvelopeFill } from "styled-icons/bootstrap";
import { renderWithTheme } from "utils/tests/helpers";
import TextField from ".";

describe("<TextField/>", () => {
  it("Renders with Label", () => {
    renderWithTheme(<TextField label="Field" name="input" />);

    expect(screen.getByLabelText("Field")).toBeInTheDocument();
  });

  it("Renders withou Label", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText("Field")).not.toBeInTheDocument();
  });

  it("Renders with Placeholder", () => {
    renderWithTheme(<TextField placeholder="your name" />);

    expect(screen.getByPlaceholderText("your name")).toBeInTheDocument();
  });

  it("should render with icon", () => {
    renderWithTheme(<TextField icon={<EnvelopeFill data-testid="icon" />} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render icon on the right side", () => {
    renderWithTheme(
      <TextField
        icon={<EnvelopeFill data-testid="icon" />}
        iconPosition="right"
      />
    );

    expect(screen.getByTestId("icon").parentElement).toHaveStyle({ order: 1 });
  });

  it("should render error message", () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<EnvelopeFill data-testid="icon" />}
        iconPosition="right"
        label="TextField"
        name="TextField"
        errorMessage="error message"
      />
    );
    expect(screen.getByText("error message")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Does not changes its value when disabled", async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        icon={<EnvelopeFill data-testid="icon" />}
        iconPosition="right"
        disabled
      />
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();

    const text = "This is my text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it("Changes its value when typing", async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField label="textField" name="textField" onInput={onInput} />
    );

    const input = screen.getByRole("textbox");
    const text = "This is my text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });
});
