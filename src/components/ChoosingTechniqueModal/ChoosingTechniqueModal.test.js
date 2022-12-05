import React from "react";
import { ChoosinTechniqueModal } from "./ChoosingTechniquesModal";
import { render, cleanup } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

describe("Duration modal", () => {
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
  });
});
