import React, { useRef } from "react";
import "./timer.css";
import { vibrate } from "../../utils/Vibration";
import { noOp } from "../../utils/NoOp";
import { Howl } from "howler";
import bell from "../../assets/sounds/bell-hit-soft.wav";
import useOnClickOutside from "../../utils/Hooks/useOnClickOutside";
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
  setStop,
  stop,
  //handleStop,
  vibrations,
  sounds,
  animate,
  setAnimate,
  setShowButtons,
}) => {
  const ref = useRef();
  const nodeRef = useRef(null);
  // Setup the new Howl.
  const sound = new Howl({
    src: [bell],
  });

  useOnClickOutside(ref, () => {
    if (animate) {
      console.log("using onclickoutside");
      handlePause();
    }
  });

  const changeOfStep = (modulo, array) => {
    for (let i = 0; i <= 3; i++) {
      const { duration, step } = array[i];
      if (modulo < duration) {
        if (modulo === 0 && !pause) {
          sounds ? sound.play() : noOp();
          vibrations ? vibrate() : noOp();
        }
        return { duration: duration - modulo, currentStep: step, index: i };
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
      setAnimate(false);
    } else {
      const newIntervalId = setInterval(() => {
        setSeconds(
          () => seconds + Math.floor((Date.now() - initialUnixTime) / 1000)
        );
      }, 1000);

      setIntervalId(newIntervalId);
      setPause(false);
      setStop(false);
      setAnimate(true);
      setShowButtons(false);
    }
  };

  return (
    <div className="container">
      {/* <div className="area1"></div>
      <div className="area2"> */}
      <div className="circle-outer" onClick={handleStart} ref={ref}>
        <CSSTransition
          appear
          in={stop}
          nodeRef={nodeRef}
          timeout={1100}
          classNames="mountain_on_stop"
        >
          <div
            ref={nodeRef}
            className="circle-inner"
            // style={{
            //   backgroundSize: intervalId ? "0 0" : "",
            // }}
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
        </CSSTransition>
      </div>

      <div
        className="orbit"
        style={{
          visibility: intervalId ? "visible" : "hidden",
          transform:
            changeOfStep(modFromSec, inhaleExhale).index === 1
              ? `rotateZ(-175deg)`
              : changeOfStep(modFromSec, inhaleExhale).index === 3
              ? `rotateZ(-360deg)`
              : "",
          animationName: !stop
            ? `${
                changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale"
                  ? "orbit"
                  : changeOfStep(modFromSec, inhaleExhale).currentStep ===
                    "exhale"
                  ? "orbit2"
                  : "none"
              }`
            : "",
          animationDuration: `${
            changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale"
              ? inhaleExhale[0].duration
              : changeOfStep(modFromSec, inhaleExhale).currentStep === "exhale"
              ? inhaleExhale[2].duration
              : 0
          }s`,
          animationPlayState:
            animate &&
            (changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale" ||
              changeOfStep(modFromSec, inhaleExhale).currentStep === "exhale")
              ? "running"
              : "paused",
        }}
      >
        <div
          className="sun2-wrapper"
          style={{
            transform:
              changeOfStep(modFromSec, inhaleExhale).index === 1
                ? `rotateX(-90deg) rotateY(180deg) rotateZ(0deg)`
                : changeOfStep(modFromSec, inhaleExhale).index === 3
                ? `rotateX(-90deg) rotateY(0deg) rotateZ(0deg)`
                : "",
            // display: intervalId || pause ? "grid" : "none",
            animationName: !stop
              ? `${
                  changeOfStep(modFromSec, inhaleExhale).currentStep ===
                  "inhale"
                    ? "invert"
                    : changeOfStep(modFromSec, inhaleExhale).currentStep ===
                      "exhale"
                    ? "invert2"
                    : "none"
                }`
              : "",
            animationDuration: `${
              changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale"
                ? inhaleExhale[0].duration
                : changeOfStep(modFromSec, inhaleExhale).currentStep ===
                  "exhale"
                ? inhaleExhale[2].duration
                : 0
            }s`,
            animationPlayState:
              animate &&
              (changeOfStep(modFromSec, inhaleExhale).currentStep ===
                "inhale" ||
                changeOfStep(modFromSec, inhaleExhale).currentStep === "exhale")
                ? "running"
                : "paused",
          }}
        >
          <div
            className="sun2"
            style={{
              "--color1": "hsla(216, 100%, 94%, 1)",
              "--color2": "hsla(206, 82%, 17%, 1)",
              height:
                changeOfStep(modFromSec, inhaleExhale).index === 1
                  ? `${1.15 * 1.8}rem`
                  : changeOfStep(modFromSec, inhaleExhale).index === 3
                  ? `${1.8}rem`
                  : "",
              width:
                changeOfStep(modFromSec, inhaleExhale).index === 1
                  ? `${1.15 * 1.8}rem`
                  : changeOfStep(modFromSec, inhaleExhale).index === 3
                  ? `${1.8}rem`
                  : "",
              background:
                changeOfStep(modFromSec, inhaleExhale).index === 3
                  ? "linear-gradient(to bottom, var(--color1), var(--color2)) bottom /250% 250%"
                  : changeOfStep(modFromSec, inhaleExhale).index === 1
                  ? "linear-gradient(to bottom, var(--color1), var(--color2)) top /250% 250%"
                  : "",
              // backgroundSize: "200%, 200%",
              animationName: !stop
                ? `${
                    changeOfStep(modFromSec, inhaleExhale).currentStep ===
                    "inhale"
                      ? "scale, sun_gradient"
                      : changeOfStep(modFromSec, inhaleExhale).currentStep ===
                        "exhale"
                      ? "scale2, sun_gradient2"
                      : "none"
                  }`
                : "",
              animationDuration: `${
                changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale"
                  ? inhaleExhale[0].duration
                  : changeOfStep(modFromSec, inhaleExhale).currentStep ===
                    "exhale"
                  ? inhaleExhale[2].duration
                  : 0
              }s,${
                changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale"
                  ? inhaleExhale[0].duration
                  : changeOfStep(modFromSec, inhaleExhale).currentStep ===
                    "exhale"
                  ? inhaleExhale[2].duration
                  : 0
              }s`,

              animationTimingFunction: "linear, linear",
              animationDirection: "normal, normal",
              animationIterationCount: `infinite, infinite`,
              animationPlayState: `
                ${
                  animate &&
                  (changeOfStep(modFromSec, inhaleExhale).currentStep ===
                    "inhale" ||
                    changeOfStep(modFromSec, inhaleExhale).currentStep ===
                      "exhale")
                    ? "running"
                    : "paused"
                }, ${
                animate &&
                (changeOfStep(modFromSec, inhaleExhale).currentStep ===
                  "inhale" ||
                  changeOfStep(modFromSec, inhaleExhale).currentStep ===
                    "exhale")
                  ? "running"
                  : "paused"
              }`,

              // `sun_gradient ${
              //   changeOfStep(modFromSec, inhaleExhale).duration
              // }s linear infinite alternate`,
              // animationPlayState:
              //   animate &&
              //   (changeOfStep(modFromSec, inhaleExhale).currentStep ===
              //     "inhale" ||
              //     changeOfStep(modFromSec, inhaleExhale).currentStep ===
              //       "exhale")
              //     ? "running"
              //     : "paused",
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
