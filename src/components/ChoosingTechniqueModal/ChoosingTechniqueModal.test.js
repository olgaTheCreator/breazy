import React from "react";
import { ChoosinTechniqueModal } from "./ChoosingTechniquesModal";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Choosing technique modal", () => {
  afterEach(cleanup);
  describe("Elements rendering on screen", () => {
    test("Modal name is displayed", () => {
      const setTechniquesOpen = jest.fn();
      const handleStop = jest.fn();
      const setTechnique = jest.fn();

      const container = render(
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          setTechnique={setTechnique}
          handleStop={handleStop}
        />
      );
      const name = container.getByText(/techniques/i);
      expect(name).toBeInTheDocument();
    });
    test("Modal description is displayed", () => {
      const setTechniquesOpen = jest.fn();
      const handleStop = jest.fn();
      const setTechnique = jest.fn();

      const container = render(
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          setTechnique={setTechnique}
          handleStop={handleStop}
        />
      );
      const name = container.getByText(/choose technique/i);
      expect(name).toBeInTheDocument();
    });
    test("list items should be rendered", () => {
      const setTechniquesOpen = jest.fn();
      const handleStop = jest.fn();
      const setTechnique = jest.fn();

      const container = render(
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          setTechnique={setTechnique}
          handleStop={handleStop}
        />
      );
      const techniqueLis = container.getAllByRole("listitem");
      expect(techniqueLis).toHaveLength(4);
    });
    test("list items should be rendered as buttons", () => {
      const setTechniquesOpen = jest.fn();
      const handleStop = jest.fn();
      const setTechnique = jest.fn();

      const container = render(
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          setTechnique={setTechnique}
          handleStop={handleStop}
        />
      );
      const techniqueButtons = container.getAllByRole("button");
      expect(techniqueButtons).toHaveLength(4);
    });
    test("Small icons are displayed", () => {
      const setTechniquesOpen = jest.fn();
      const handleStop = jest.fn();
      const setTechnique = jest.fn();

      const container = render(
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          setTechnique={setTechnique}
          handleStop={handleStop}
        />
      );
      const iconsSmall = container.getAllByLabelText(
        /decrease and increase duration icon/i
      );
      expect(iconsSmall).toHaveLength(4);
      iconsSmall.forEach((a) => expect(a).toBeInTheDocument());
    });
    test("Name of techniques to be displayed", () => {
      const setTechniquesOpen = jest.fn();
      const handleStop = jest.fn();
      const setTechnique = jest.fn();

      const container = render(
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          setTechnique={setTechnique}
          handleStop={handleStop}
        />
      );
      const techniqueName = container.getAllByTestId("technique-name");
      expect(techniqueName).toHaveLength(4);
      techniqueName.forEach((a) => expect(a).toBeInTheDocument());
    });
    test("Duration of steps in technique are displayed", () => {
      const setTechniquesOpen = jest.fn();
      const handleStop = jest.fn();
      const setTechnique = jest.fn();

      const container = render(
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          setTechnique={setTechnique}
          handleStop={handleStop}
        />
      );
      const stepsDuration = container.getAllByTestId("steps-durations");
      expect(stepsDuration).toHaveLength(4);
      stepsDuration.forEach((a) => expect(a).toBeInTheDocument());
    });
    test("Short description of technique is displayed", () => {
      const setTechniquesOpen = jest.fn();
      const handleStop = jest.fn();
      const setTechnique = jest.fn();

      const container = render(
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          setTechnique={setTechnique}
          handleStop={handleStop}
        />
      );
      const shortDescription = container.getAllByTestId("short-description");
      expect(shortDescription).toHaveLength(4);
      shortDescription.forEach((a) => expect(a).toBeInTheDocument());
    });
  });
  describe("User events", () => {
    test("props functions should be called on button click", async () => {
      const setTechniquesOpen = jest.fn();
      const handleStop = jest.fn();
      const setTechnique = jest.fn();

      const container = render(
        <ChoosinTechniqueModal
          setTechniquesOpen={setTechniquesOpen}
          setTechnique={setTechnique}
          handleStop={handleStop}
        />
      );
      const techniqueButton = container.getAllByRole("button");
      await userEvent.click(techniqueButton[0]);
      expect(setTechniquesOpen).toBeCalled();
      expect(handleStop).toBeCalled();
      expect(setTechnique).toBeCalled();
    });
  });
});
