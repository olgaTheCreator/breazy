import React from "react";
import { render, cleanup } from "@testing-library/react";
import { NavigationIcons } from "./NavigationIcons";
import { breathingTechniques } from "../../data/breathingTechniques";
//import { userEvent } from "@testing-library/user-event/dist/types/setup";
import userEvent from "@testing-library/user-event";

describe("Navigation Icons", () => {
  const mockProps = (overrides) => ({
    setMenuOpen: jest.fn(),
    chosenTechnique: breathingTechniques[0],
    setTechnique: jest.fn(),
    intervalId: 0,
    setIntervalId: jest.fn(),
    setSeconds: jest.fn(),
    setDuration: jest.fn(),
    durationOfSession: 3,
    handleStop: jest.fn(),
    vibrations: true,
    setVibrations: jest.fn(),
    sounds: true,
    setSounds: jest.fn(),
    ...overrides,
  });
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
    test("when vibrations are hovered and vibrations are set to true 'vibrations on' text is displayed", async () => {
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
    test("when vibrations are hovered and vibrations are set to false 'vibrations off' text is displayed", async () => {
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

      const vib_off = container.getByLabelText(/vibrations off/i);
      await userEvent.hover(vib_off);

      const vib_on_paragraph = container.getByText(/vibrations off/i);
      expect(vib_on_paragraph).toBeInTheDocument();
    });
    test("when sounds are hovered and vibrations are set to true 'sound on' text is displayed", async () => {
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
      await userEvent.hover(sound_on);

      const sound_on_paragraph = container.getByText(/sound on/i);
      expect(sound_on_paragraph).toBeInTheDocument();
    });
    test("when sounds are hovered and vibrations are set to false 'sound off' text is displayed", async () => {
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

      const sound_off = container.getByLabelText(/sound off/i);
      await userEvent.hover(sound_off);

      const sound_off_paragraph = container.getByText(/sound off/i);
      expect(sound_off_paragraph).toBeInTheDocument();
    });
    test("when duration is hovered 'duration' text is displayed", async () => {
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

      const duration = container.getByLabelText(
        /set duration of breathing session/i
      );
      await userEvent.hover(duration);

      const duration_paragraph = container.getByText(/duration/i);
      expect(duration_paragraph).toBeInTheDocument();
    });
    test("when techniques is hovered 'techniques' text is displayed", async () => {
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

      const techniques = container.getByLabelText(/choose technique/i);
      await userEvent.hover(techniques);

      const techniques_paragraph = container.getByText(/techniques/i);
      expect(techniques_paragraph).toBeInTheDocument();
    });
  });

  describe("clicking on buttons calls state changing functions", () => {
    test("clicking on vibrations button when vibrations are set to true calls setVibrations ", async () => {
      const props = mockProps();

      const container = render(<NavigationIcons {...props} />);

      const vib_on = container.getByLabelText(/vibrations on/i);
      await userEvent.click(vib_on);

      expect(props.setVibrations).toBeCalledTimes(1);
    });
    test("clicking on vibrations button when vibrations are set to false calls setVibrations ", async () => {
      const props = mockProps({ vibrations: false });

      const container = render(<NavigationIcons {...props} />);

      const vib_off = container.getByLabelText(/vibrations off/i);
      await userEvent.click(vib_off);

      expect(props.setVibrations).toBeCalledTimes(1);
    });
    test("clicking on sound button when sounds are set to true calls setVibrations ", async () => {
      const props = mockProps();

      const container = render(<NavigationIcons {...props} />);

      const sound_on = container.getByLabelText(/sound on/i);
      await userEvent.click(sound_on);

      expect(props.setSounds).toBeCalledTimes(1);
    });
    test("clicking on sound button when sounds are set to false calls setVibrations ", async () => {
      const props = mockProps({ sounds: false });

      const container = render(<NavigationIcons {...props} />);

      const sound_off = container.getByLabelText(/sound off/i);
      await userEvent.click(sound_off);

      expect(props.setSounds).toBeCalledTimes(1);
    });
    test("clicking on duration button calls setMenuOpen ", async () => {
      const props = mockProps();

      const container = render(<NavigationIcons {...props} />);

      const duration = container.getByLabelText(
        /set duration of breathing session/i
      );
      await userEvent.click(duration);

      expect(props.setMenuOpen).toBeCalledTimes(1);
    });
    test("clicking on techniques button calls setMenuOpen ", async () => {
      const props = mockProps();

      const container = render(<NavigationIcons {...props} />);

      const techniques = container.getByLabelText(/choose technique/i);
      await userEvent.click(techniques);

      expect(props.setMenuOpen).toBeCalledTimes(1);
    });
    test("clicking on duration button changes state of timeIsOpen and depending on state calls or doesn't call handleStop", async () => {
      const props = mockProps();

      const container = render(<NavigationIcons {...props} />);

      const duration = container.getByLabelText(
        /set duration of breathing session/i
      );

      //timeIsOpen is false
      await userEvent.click(duration);
      expect(props.handleStop).not.toBeCalled();

      //timeIsOpen is true
      await userEvent.click(duration);
      expect(props.handleStop).toBeCalledTimes(1);
    });
    test("clicking on duration button changes state of timeIsOpen and setDuartionModal is rendered when timeIsOpen changes to true", async () => {
      const props = mockProps();

      const container = render(<NavigationIcons {...props} />);

      const duration = container.getByLabelText(
        /set duration of breathing session/i
      );

      //timeIsOpen is false
      userEvent.click(duration);
      const setDurationModalWrapper = await container.findByTestId(
        "duration motion div"
      );
      expect(setDurationModalWrapper).toBeInTheDocument();
    });
    test("clicking on duration button changes state of timeIsOpen and setDuartionModal is not rendered when timeIsOpen changes to false", async () => {
      const props = mockProps();

      const container = render(<NavigationIcons {...props} />);

      const duration = container.getByLabelText(
        /set duration of breathing session/i
      );

      //timeIsOpen is false
      await userEvent.click(duration);

      //timeIsOpen is true
      await userEvent.click(duration);
      container.rerender();
      const setDurationModalWrapper = container.queryByTestId(
        "duration motion div"
      );
      expect(setDurationModalWrapper).not.toBeInTheDocument();
    });
    test("clicking on techniques button changes state of techniquesAreOpen and choosingTechniqueModal is rendered when techniquesAreOpen changes to true", async () => {
      const props = mockProps();

      const container = render(<NavigationIcons {...props} />);

      const techniques = container.getByLabelText(/choose technique/i);

      //timeIsOpen is false
      await userEvent.click(techniques);
      const setTechniquesModalWrapper = await container.findByTestId(
        "techniques motion div"
      );
      expect(setTechniquesModalWrapper).toBeInTheDocument();
    });
    test("clicking on techniques button changes state of techniquesAreOpen and choosingTechniqueModal is not rendered when techniquesAreOpen changes to false", async () => {
      const props = mockProps();

      const container = render(<NavigationIcons {...props} />);

      const techniques = container.getByLabelText(/choose technique/i);

      //timeIsOpen is false
      await userEvent.click(techniques);
      // container.rerender();
      const setTechniquesModalWrapper = await container.queryByTestId(
        /techniques motion div/i
      );

      expect(setTechniquesModalWrapper).toBeInTheDocument();

      //timeIsOpen is true
      await userEvent.click(techniques);
      container.rerender();
      expect(setTechniquesModalWrapper).not.toBeInTheDocument();
    });
  });
});
