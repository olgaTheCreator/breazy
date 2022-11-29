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

test("If duration of session is longer than 1, minutes are in plural (contain 's')  ", () => {
  const durationOfSession = 4;
  const chosenTechnique = { name: "calm" };
  const container = render(
    <BeginSessionText
      durationOfSession={durationOfSession}
      chosenTechnique={chosenTechnique}
    />
  );

  const beginSessionText = container.getByText(/begin your/i);

  expect(beginSessionText).toHaveTextContent("minutes", { exact: true });
});

test("If duration of session 1, minutes are in singular (doesn't contain 's')  ", () => {
  const durationOfSession = 1;
  const chosenTechnique = { name: "calm" };
  const container = render(
    <BeginSessionText
      durationOfSession={durationOfSession}
      chosenTechnique={chosenTechnique}
    />
  );

  const beginSessionText = container.getByText(/begin your/i);

  expect(beginSessionText).not.toHaveTextContent("minutes", { exact: true });
  expect(beginSessionText).toHaveTextContent("minute", { exact: true });
});
