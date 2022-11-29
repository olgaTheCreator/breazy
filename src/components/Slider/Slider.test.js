import React from "react";
import { DurationSlider } from "./Slider";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("slider is displayed", () => {
  const container = render(<DurationSlider />);
  const slider = container.getByRole("slider");
  expect(slider).toBeInTheDocument();
});
