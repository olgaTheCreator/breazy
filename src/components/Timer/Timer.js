import React, { useState } from "react";
import "./timer.css";
import { vibrate } from "../../utils/Vibration";
import { noOp } from "../../utils/NoOp";
import { Howl } from "howler";
import bell from "../../assets/sounds/bell-hit-soft.wav";
import { CSSTransition } from "react-transition-group";

export const Timer = ({
  chosenTechnique,
  seconds,
  setSeconds,
  setIntervalId,
  intervalId,
  //durationOfSession,
  pause,
  setPause,
  handlePause,
  //handleStop,
  vibrations,
  sounds,
}) => {
  const [animate, setAnimate] = useState(false);
  // Setup the new Howl.
  const sound = new Howl({
    src: [bell],
  });

  const changeOfStep = (modulo, array) => {
    for (let i = 0; i <= 3; i++) {
      const { duration, step } = array[i];
      if (modulo < duration) {
        if (modulo === 0) {
          sounds ? sound.play() : noOp();
          vibrations ? vibrate() : noOp();
        }
        return { duration: duration - modulo, currentStep: step };
      } else {
        modulo = modulo - duration;
      }
    }
  };

  const { inhaleExhale } = chosenTechnique;

  const modFromSec =
    seconds % inhaleExhale.reduce((acc, b) => acc + b.duration, 0);

  const handleStart = () => {
    const initialUnixTime = Date.now();

    if (intervalId && !pause) {
      handlePause();
    } else {
      const newIntervalId = setInterval(() => {
        setSeconds(
          () => seconds + Math.floor((Date.now() - initialUnixTime) / 1000)
        );
      }, 1000);

      setIntervalId(newIntervalId);
      setPause(false);
      setAnimate(true);
    }
  };

  return (
    <div className="container">
      {/* <div className="area1"></div>
      <div className="area2"> */}
      <div className="circle-outer" onClick={handleStart}>
        <div
          className="circle-inner"
          style={{
            background: intervalId ? "#23292d" : "",
          }}
        >
          {intervalId ? (
            <div id="stop-button">
              {intervalId ? (
                <div className="step-text">
                  {changeOfStep(modFromSec, inhaleExhale).currentStep}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div className="play-button">
              <p>START</p>
            </div>
          )}
        </div>
      </div>
      <CSSTransition in={animate} timeout={5000} classNames="my-node" appear>
        <div className="orbit">
          <div className="sun2-wrapper">
            <div className="sun2"> </div>
          </div>
        </div>
      </CSSTransition>
    </div>
    // </div>
  );
};
