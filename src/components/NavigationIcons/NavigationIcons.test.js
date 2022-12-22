import React from "react";
import { render, cleanup } from "@testing-library/react";
import { NavigationIcons } from "./NavigationIcons";
//import userEvent from "@testing-library/user-event";

describe("Choosing technique modal", () => {
  afterEach(cleanup);
  describe("Elements rendering on screen", () => {
    test("Four buttons are rendered", () => {
      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={chosenTechnique}
          setTechnique={setTechnique}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={durationOfSession}
          setPause={setPause}
          handlePause={handlePause}
          handleStop={handleStop}
          vibrations={vibrations}
          setVibrations={setVibrations}
          sounds={sounds}
          setSounds={setSounds}
        />
      );
    });
  });
});
