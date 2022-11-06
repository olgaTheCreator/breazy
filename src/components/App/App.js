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
  const [stop, setStop] = useState(true);
  const [menuIsOpen, setMenuOpen] = useState(false);

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
    setStop(true);
    setPause(false);
    setAnimate(false);
    // setShowButtons(true);
    return;
  };
  // const handleShowingButtons = () => {
  //   if (intervalId && !pause) {
  //     setShowButtons(true);
  //     setTimeout(() => setShowButtons(false), 7000);
  //   }
  // };
  if (Math.floor(seconds / 1000) === durationOfSession * 60) {
    setTimeout(() => {
      handleStop();
    }, 3000);

    // useEffect(() => {
    //   setTimeout(() => {
    //     handleStop();
    //   }, 5000);
    // }, []);
  }

  return (
    <AppWrapper>
      {" "}
      <div className="menu-icon">
        <MenuIcon menuIsOpen={menuIsOpen} setMenuOpen={setMenuOpen} />
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
            setStop={setStop}
            stop={stop}
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
          {durationOfSession * 60 === Math.floor(seconds / 1000) ? (
            <EndOfSessionText />
          ) : stop ? (
            <BeginSessionText
              durationOfSession={durationOfSession}
              chosenTechnique={chosenTechnique}
            />
          ) : (
            " "
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
        {!showButtons && (
          <div
            className="progress-meter"
            style={{
              transform: `translateX(${
                seconds / (durationOfSession * 60000) < 0.91
                  ? (seconds / (durationOfSession * 60000)) * window.innerWidth
                  : 0.91 * window.innerWidth
              }px)`,
              // left: `min(${
              //   (seconds / (durationOfSession * 60000)) * 100 - 5
              // }%, 93%)`,
              // animationDuration: `${durationOfSession * 60}s`,
              // animationPlayState: !pause ? "running" : "paused",
            }}
          ></div>
        )}
        {/* {console.log(
          seconds,
          window.innerWidth,
          seconds / (durationOfSession * 60000)
        )} */}
        {showButtons && (
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
