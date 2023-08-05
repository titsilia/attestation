import React from "react";
import { render, screen } from "@testing-library/react";
import {
  DivMainUsers,
  UsersText,
  Buttons,
} from "../blocks/styles/userItem-styles";

describe("presence Styled Components on the page", () => {
  it("present text component", () => {
    render(<UsersText data-testid="text" />);
    expect(screen.getByTestId("text")).toBeInTheDocument();
  });
  it("present div component", () => {
    render(<DivMainUsers data-testid="user-div" />);
    expect(screen.getByTestId("user-div")).toBeInTheDocument();
  });
  it("present button component", () => {
    render(<Buttons data-testid="buttons" />);
    expect(screen.getByTestId("buttons")).toBeInTheDocument();
  });
});
