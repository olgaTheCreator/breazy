import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { MenuIcon } from "./MenuIcon";

afterEach(cleanup);

// test("", () => {
//   render(<MenuIcon />);
//   const usernameInputEl = screen.getByPlaceholderText(/username/i);
//   expect(usernameInputEl).toBeInTheDocument();
// });

test("button should be rendered", () => {
  render(<MenuIcon />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});
