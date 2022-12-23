import React from "react";
import { render, cleanup } from "@testing-library/react";
import { NavigationIcons } from "./NavigationIcons";
import { breathingTechniques } from "../../data/breathingTechniques";
//import { userEvent } from "@testing-library/user-event/dist/types/setup";
import userEvent from "@testing-library/user-event";

describe("Choosing technique modal", () => {
  afterEach(cleanup);
  describe("Elements rendering on screen", () => {
    test("Four buttons are rendered", () => {
      const setMenuOpen = jest.fn();
      const setTechnique = jest.fn();
      const setIntervalId = jest.fn();
      const setSeconds = jest.fn();
      const setDuration = jest.fn();
      const setSounds = jest.fn();
      const setVibrations = jest.fn();
      const handleStop = jest.fn();

      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={breathingTechniques[0]}
          setTechnique={setTechnique}
          intervalId={0}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={3}
          handleStop={handleStop}
          vibrations={true}
          setVibrations={setVibrations}
          sounds={true}
          setSounds={setSounds}
        />
      );
      const navButtons = container.getAllByRole("button");
      expect(navButtons).toHaveLength(4);
    });
    test("If vibrations set to true vib_on icon is rendered and vib_off is not", () => {
      const setMenuOpen = jest.fn();
      const setTechnique = jest.fn();
      const setIntervalId = jest.fn();
      const setSeconds = jest.fn();
      const setDuration = jest.fn();
      const setSounds = jest.fn();
      const setVibrations = jest.fn();
      const handleStop = jest.fn();

      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={breathingTechniques[0]}
          setTechnique={setTechnique}
          intervalId={0}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={3}
          handleStop={handleStop}
          vibrations={true}
          setVibrations={setVibrations}
          sounds={true}
          setSounds={setSounds}
        />
      );
      const vib_on = container.getByLabelText(/vibrations on/i);
      const vib_off = container.queryByLabelText(/vibrations off/i);
      expect(vib_off).not.toBeInTheDocument();
      expect(vib_on).toBeInTheDocument();
    });
    test("If vibrations set to false vib_off icon is rendered and vib_on is not", () => {
      const setMenuOpen = jest.fn();
      const setTechnique = jest.fn();
      const setIntervalId = jest.fn();
      const setSeconds = jest.fn();
      const setDuration = jest.fn();
      const setSounds = jest.fn();
      const setVibrations = jest.fn();
      const handleStop = jest.fn();

      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={breathingTechniques[0]}
          setTechnique={setTechnique}
          intervalId={0}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={3}
          handleStop={handleStop}
          vibrations={false}
          setVibrations={setVibrations}
          sounds={true}
          setSounds={setSounds}
        />
      );
      const vib_on = container.queryByLabelText(/vibrations on/i);
      const vib_off = container.getByLabelText(/vibrations off/i);
      expect(vib_off).toBeInTheDocument();
      expect(vib_on).not.toBeInTheDocument();
    });

    test("If sounds set to true sound_on icon is rendered and sound_off is not", () => {
      const setMenuOpen = jest.fn();
      const setTechnique = jest.fn();
      const setIntervalId = jest.fn();
      const setSeconds = jest.fn();
      const setDuration = jest.fn();
      const setSounds = jest.fn();
      const setVibrations = jest.fn();
      const handleStop = jest.fn();

      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={breathingTechniques[0]}
          setTechnique={setTechnique}
          intervalId={0}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={3}
          handleStop={handleStop}
          vibrations={true}
          setVibrations={setVibrations}
          sounds={true}
          setSounds={setSounds}
        />
      );
      const sound_on = container.getByLabelText(/sound on/i);
      const sound_off = container.queryByLabelText(/sound off/i);
      expect(sound_off).not.toBeInTheDocument();
      expect(sound_on).toBeInTheDocument();
    });
    test("If sounds set to false sound_off icon is rendered and sound_on is not", () => {
      const setMenuOpen = jest.fn();
      const setTechnique = jest.fn();
      const setIntervalId = jest.fn();
      const setSeconds = jest.fn();
      const setDuration = jest.fn();
      const setSounds = jest.fn();
      const setVibrations = jest.fn();
      const handleStop = jest.fn();

      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={breathingTechniques[0]}
          setTechnique={setTechnique}
          intervalId={0}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={3}
          handleStop={handleStop}
          vibrations={true}
          setVibrations={setVibrations}
          sounds={false}
          setSounds={setSounds}
        />
      );
      const sound_on = container.queryByLabelText(/sound on/i);
      const sound_off = container.getByLabelText(/sound off/i);
      expect(sound_off).toBeInTheDocument();
      expect(sound_on).not.toBeInTheDocument();
    });
    test("Duration icon is rendered", () => {
      const setMenuOpen = jest.fn();
      const setTechnique = jest.fn();
      const setIntervalId = jest.fn();
      const setSeconds = jest.fn();
      const setDuration = jest.fn();
      const setSounds = jest.fn();
      const setVibrations = jest.fn();
      const handleStop = jest.fn();

      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={breathingTechniques[0]}
          setTechnique={setTechnique}
          intervalId={0}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={3}
          handleStop={handleStop}
          vibrations={true}
          setVibrations={setVibrations}
          sounds={true}
          setSounds={setSounds}
        />
      );
      const duration_icon = container.getByLabelText(/^duration$/i);
      expect(duration_icon).toBeInTheDocument();
    });
    test("Techniques icon is rendered", () => {
      const setMenuOpen = jest.fn();
      const setTechnique = jest.fn();
      const setIntervalId = jest.fn();
      const setSeconds = jest.fn();
      const setDuration = jest.fn();
      const setSounds = jest.fn();
      const setVibrations = jest.fn();
      const handleStop = jest.fn();

      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={breathingTechniques[0]}
          setTechnique={setTechnique}
          intervalId={0}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={3}
          handleStop={handleStop}
          vibrations={true}
          setVibrations={setVibrations}
          sounds={true}
          setSounds={setSounds}
        />
      );
      const techniques_icon = container.getByLabelText(/^techniques$/i);
      expect(techniques_icon).toBeInTheDocument();
    });
  });
  describe("hover on buttons renders description", () => {
    test("when buttons are not hovered descriptions are not rendered", () => {
      const setMenuOpen = jest.fn();
      const setTechnique = jest.fn();
      const setIntervalId = jest.fn();
      const setSeconds = jest.fn();
      const setDuration = jest.fn();
      const setSounds = jest.fn();
      const setVibrations = jest.fn();
      const handleStop = jest.fn();

      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={breathingTechniques[0]}
          setTechnique={setTechnique}
          intervalId={0}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={3}
          handleStop={handleStop}
          vibrations={true}
          setVibrations={setVibrations}
          sounds={true}
          setSounds={setSounds}
        />
      );
      const paragraphs = container.queryAllByRole("paragraph");
      expect(paragraphs).toHaveLength(0);
    });
    test("when vibrations are hovered and vibrations are set to true 'vibrations on text' is displayed", async () => {
      const setMenuOpen = jest.fn();
      const setTechnique = jest.fn();
      const setIntervalId = jest.fn();
      const setSeconds = jest.fn();
      const setDuration = jest.fn();
      const setSounds = jest.fn();
      const setVibrations = jest.fn();
      const handleStop = jest.fn();

      const container = render(
        <NavigationIcons
          setMenuOpen={setMenuOpen}
          chosenTechnique={breathingTechniques[0]}
          setTechnique={setTechnique}
          intervalId={0}
          setIntervalId={setIntervalId}
          setSeconds={setSeconds}
          setDuration={setDuration}
          durationOfSession={3}
          handleStop={handleStop}
          vibrations={true}
          setVibrations={setVibrations}
          sounds={true}
          setSounds={setSounds}
        />
      );

      const vib_on = container.getByLabelText(/vibrations on/i);
      await userEvent.hover(vib_on);

      const vib_on_paragraph = container.getByText(/vibrations on/i);
      expect(vib_on_paragraph).toBeInTheDocument();
    });
  });
});
