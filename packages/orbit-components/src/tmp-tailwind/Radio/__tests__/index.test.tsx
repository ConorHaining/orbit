import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../../test-utils";
import Radio from "..";

describe(`Radio`, () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const label = "Radio";
    const onChange = jest.fn();
    const value = "option";
    const tabIndex = "-1";
    const dataTest = "test";
    const name = "name";

    render(
      <Radio
        label={label}
        onChange={onChange}
        value={value}
        dataTest={dataTest}
        name={name}
        readOnly
        tabIndex={tabIndex}
      />,
    );

    const radio = screen.getByRole("radio");

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(radio).toHaveAttribute("tabindex", "-1");
    expect(radio).toHaveAttribute("name", name);
    expect(radio).toHaveAttribute("readonly");
    expect(radio).toHaveAttribute("data-state", "ok");
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    await user.click(radio);
    expect(onChange).toHaveBeenCalled();
  });

  it("should be disabled", () => {
    render(<Radio disabled onChange={() => {}} />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("should have error state", () => {
    render(<Radio hasError onChange={() => {}} />);
    expect(screen.getByRole("radio")).toHaveAttribute("data-state", "error");
  });
});
