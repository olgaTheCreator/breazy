import React, { useState } from "react";
import { breathingTechniques } from "../../data/breathingTechniques";
import { Timer } from "../Timer/Timer";
import { NavigationIcons } from "../NavigationIcons/NavigationIcons";
import { AppWrapper } from "../AppWrapper/AppWrapper";
import { MenuIcon } from "../MenuIcon/MenuIcon";
import "../../styles/style.css";
import { BeginSessionText } from "../BeginSessionText/BeginSessionText";
import { EndOfSessionText } from "../EndOfSession/EndOfSessionText";
// import { ShowingTechniqueNameOnScreen } from "../ShowingTechniqueName/ShowingTechniqueName";
import "@fontsource/montserrat";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [chosenTechnique, setTechnique] = useState(breathingTechniques[0]);
  const [durationOfSession, setDuration] = useState(3);
  const [pause, setPause] = useState(false);
  const [vibrations, setVibrations] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const handlePause = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    setPause(true);
    setAnimate(false);
    setShowButtons(true);
    return;
  };
  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    setSeconds(0);
    setPause(false);
    // setShowButtons(true);
    return;
  };
  // const handleShowingButtons = () => {
  //   if (intervalId && !pause) {
  //     setShowButtons(true);
  //     setTimeout(() => setShowButtons(false), 7000);
  //   }
  // };
  if (seconds <= durationOfSession * 60) {
    // console.log(seconds);
  } else handleStop();

  return (
    <AppWrapper>
      <div className="menu-icon">
        <MenuIcon />
      </div>

      <div className="timer-container">
        <div className="timer">
          <Timer
            chosenTechnique={chosenTechnique}
            seconds={seconds}
            setSeconds={setSeconds}
            intervalId={intervalId}
            setIntervalId={setIntervalId}
            durationOfSession={durationOfSession}
            pause={pause}
            setPause={setPause}
            handleStop={handleStop}
            handlePause={handlePause}
            vibrations={vibrations}
            sounds={sounds}
            animate={animate}
            setAnimate={setAnimate}
            setShowButtons={setShowButtons}
          />
        </div>
        <div className="beginSession">
          {durationOfSession * 60 === seconds ? (
            <EndOfSessionText />
          ) : !intervalId ? (
            <BeginSessionText
              durationOfSession={durationOfSession}
              chosenTechnique={chosenTechnique}
            />
          ) : (
            ""
          )}
          {/* <div>
            <ShowingTechniqueNameOnScreen chosenTechnique={chosenTechnique} />
          </div> */}
        </div>
      </div>

      <div
        className="menu-container"
        style={{
          background: showButtons ? "hsla(203, 12%, 21%, 1)" : "",
        }}
        onClick={() => handlePause()}
        // onClick={() => {
        //   handleShowingButtons();
        // }}
        // style={{ visibility: !intervalId ? "visible" : "hidden" }}
      >
        {showButtons && (
          <NavigationIcons
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
        )}
      </div>
      {/* <div
        className="mountains"
        style={{ width: "100%", visibility: intervalId ? "visible" : "hidden" }}
      >
        <div></div>
      </div> */}
    </AppWrapper>
  );
};
export default App;
