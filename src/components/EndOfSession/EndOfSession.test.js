import React from "react";
import { EndOfSessionText } from "./EndOfSessionText";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("End of Session text is displayed", () => {
  const container = render(<EndOfSessionText />);
  const endText = container.getByText(/your breathing session/i);
  expect(endText).toBeInTheDocument();
});
