import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BeginSessionText } from "./BeginSessionText";

afterEach(cleanup);

test("Begin session text contains durationOfSession", () => {
  const durationOfSession = 1;
  const chosenTechnique = { name: "calm" };
  const container = render(
    <BeginSessionText
      durationOfSession={durationOfSession}
      chosenTechnique={chosenTechnique}
    />
  );

  const beginSessionText = container.getByText(/begin your/i);

  expect(beginSessionText).toHaveTextContent(`${durationOfSession}`);
});

test("Begin session text contains technique name", () => {
  const durationOfSession = 1;
  const chosenTechnique = { name: "calm" };
  const container = render(
    <BeginSessionText
      durationOfSession={durationOfSession}
      chosenTechnique={chosenTechnique}
    />
  );

  const beginSessionText = container.getByText(/begin your/i);

  expect(beginSessionText).toHaveTextContent(`${chosenTechnique.name}`);
});
