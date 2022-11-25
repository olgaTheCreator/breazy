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

test("info modal doesnt render when menuisopen is false", () => {
  const setMenuOpen = jest.fn();
  const container = render(
    <MenuIcon menuIsOpen={false} setMenuOpen={setMenuOpen} />
  );

  const menuModalWrapper = container.queryByTestId("wrapper_div_menuModal");

  expect(menuModalWrapper).not.toBeInTheDocument();
});

test("info modal does render when menuisopen is true", () => {
  const setMenuOpen = jest.fn();
  const container = render(
    <MenuIcon menuIsOpen={true} setMenuOpen={setMenuOpen} />
  );

  const menuModalWrapper = container.getByTestId("wrapper_div_menuModal");

  expect(menuModalWrapper).toBeInTheDocument();
});

// testing internal state - not a case here:

// test("should update state on click", async () => {
//   jest.mock("react", () => ({
//     ...jest.requireActual("react"),
//     useState: jest.fn(),
//   }));

//   const setState = jest.fn();
//   const useStateMock = (initState) => [initState, setState];
//   jest.spyOn(React, "useState").mockImplementation(useStateMock);
//   const setMenuOpen = jest.fn();

//   render(<MenuIcon menuIsOpen={true} setMenuOpen={setMenuOpen} />);

//   const buttonEl = screen.getByLabelText(/open and close/i);

//   userEvent.click(buttonEl);

//   expect(setState).toHaveBeenCalledTimes(1);
// });

test("button click triggers call to setMenuOpen", async () => {
  const setMenuOpen = jest.fn();
  const container = render(
    <MenuIcon menuIsOpen={false} setMenuOpen={setMenuOpen} />
  );
  const buttonEl = container.getByLabelText("open and close information menu");
  console.log(buttonEl);
  await userEvent.click(buttonEl);

  expect(setMenuOpen).toHaveBeenCalled();
});

test("aria-pressed is set to true when menuisopen is false and button clicked", async () => {
  const setMenuOpen = jest.fn();
  const container = render(
    <MenuIcon menuIsOpen={false} setMenuOpen={setMenuOpen} />
  );
  const buttonEl = container.getByLabelText("open and close information menu");

  await userEvent.click(buttonEl);

  expect(container.getByRole("button", { pressed: true })).toBeInTheDocument();
});

test("aria-pressed is set to false when menuisopen is true and button clicked", async () => {
  const setMenuOpen = jest.fn();
  const container = render(
    <MenuIcon menuIsOpen={true} setMenuOpen={setMenuOpen} />
  );
  const buttonEl = container.getByLabelText("open and close information menu");

  await userEvent.click(buttonEl);

  expect(
    container.queryByRole("button", { pressed: true })
  ).not.toBeInTheDocument();
});
