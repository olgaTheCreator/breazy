import React from "react";
import { SetDurationModal } from "./SetDurationModal";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Duration modal", () => {
  afterEach(cleanup);

  test("Modal name is displayed", () => {
    const container = render(<SetDurationModal />);
    const name = container.getByText(/session length/i);
    expect(name).toBeInTheDocument();
  });

  test("Modal description is displayed", () => {
    const container = render(<SetDurationModal />);
    const description = container.getByText(/set duration/i);
    expect(description).toBeInTheDocument();
  });

  test("Increase button is displayed", () => {
    const container = render(<SetDurationModal />);
    const increaseBtn = container.getByRole("button", {
      name: /increase duration/i,
    });
    expect(increaseBtn).toBeInTheDocument();
  });

  test("Decrease button is displayed", () => {
    const container = render(<SetDurationModal />);
    const decreaseBtn = container.getByRole("button", {
      name: /decrease duration/i,
    });
    expect(decreaseBtn).toBeInTheDocument();
  });

  test("Small icons are displayed", () => {
    const container = render(<SetDurationModal />);
    const iconsSmall = container.getAllByLabelText(
      /decrease and increase duration icon/i
    );
    iconsSmall.forEach((a) => expect(a).toBeInTheDocument());
  });

  test("Duration is displayed", () => {
    const container = render(<SetDurationModal />);
    const durationDiv = container.getByText(/min/i);
    expect(durationDiv).toBeInTheDocument();
  });

  test.each([
    [4, 5],
    [15, 16],
    [29, 30],
    [30, 30],
  ])(
    "Increase button onclick increases duration if dur<=29",
    async (a, expected) => {
      let dur = a;
      let setDur = (v) => (dur = v);

      const container = render(<SetDurationModal dur={dur} setDur={setDur} />);
      const increaseBtn = container.getByRole("button", {
        name: /increase duration/i,
      });

      await userEvent.click(increaseBtn);

      expect(dur).toEqual(expected);
    }
  );

  test.each([
    [1, 1],
    [2, 1],
    [13, 12],
    [30, 29],
  ])(
    "Decrease button onclick decreases duration if dur=>2",
    async (a, expected) => {
      let dur = a;
      let setDur = (v) => (dur = v);

      const container = render(<SetDurationModal dur={dur} setDur={setDur} />);
      const increaseBtn = container.getByRole("button", {
        name: /decrease duration/i,
      });

      await userEvent.click(increaseBtn);

      expect(dur).toEqual(expected);
    }
  );
});
