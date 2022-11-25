import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import { MenuIcon } from "./MenuIcon";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test("button should be rendered", () => {
  render(<MenuIcon />);
  const buttonEl = screen.getByLabelText(/open and close/i);
  expect(buttonEl).toBeInTheDocument();
});

test("info modal should toggle between open and closed on click", async () => {
  const setMenuOpen = jest.fn();
  const container = render(
    <MenuIcon menuIsOpen={true} setMenuOpen={setMenuOpen} />
  );
  const buttonEl = container.getByLabelText("open and close information menu");

  userEvent.click(buttonEl);

  const menuModalWrapper = await container.findByTestId(
    "wrapper_div_menuModal"
  );

  expect(menuModalWrapper).toBeInTheDocument();
});
