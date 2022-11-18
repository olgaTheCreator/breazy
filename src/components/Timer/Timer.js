import React, { useRef, useState } from "react";
import "./timer.css";
import { vibrate } from "../../utils/Vibration";
import { noOp } from "../../utils/NoOp";
import { Howl } from "howler";
import { Icon_Play } from "../SvgIcons/PlayIconSvg/Icon_Play/Icon_Play";
import bell from "../../assets/sounds/bell-hit-soft.wav";
import useOnClickOutside from "../../utils/Hooks/useOnClickOutside";
import { CSSTransition, SwitchTransition } from "react-transition-group";

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
  const nodeRef2 = useRef(null);
  const nodeRef3 = useRef(null);
  const [ariaPressed, setAriaPressed] = useState("false");
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
        if (
          Math.floor(modulo / 100) * 100 === 0 &&
          !pause &&
          navigator.userActivation.hasBeenActive
        ) {
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
      setAriaPressed(false);
    } else {
      const newIntervalId = setInterval(() => {
        setSeconds(
          () => seconds + Math.floor((Date.now() - initialUnixTime) / 10) * 10
        );
      }, 100);

      setIntervalId(newIntervalId);
      setAriaPressed(true);
      setPause(false);
      setStop(false);
      setAnimate(true);
      setShowButtons(false);
    }
  };

  return (
    <div className="container">
      <div className="visible_layer">
        {/* <div className="area1"></div>
      <div className="area2"> */}
        <div
          className="circle-outer"
          // onClick={handleStart}
          // ref={ref}
        >
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
              style={{
                background: intervalId ? "#23292d" : "",
              }}
            >
              <SwitchTransition>
                <CSSTransition
                  // appear
                  key={intervalId}
                  timeout={{ appear: 1100, enter: 600, exit: 600 }}
                  classNames="play_button_on_pause"
                >
                  <div>
                    {intervalId !== 0 && (
                      <div className="step-text" ref={nodeRef2}>
                        {changeOfStep(modFromSec, inhaleExhale).currentStep}
                      </div>
                    )}

                    {(intervalId === 0 || !intervalId) && (
                      <div className="play-button" ref={nodeRef3}>
                        <Icon_Play />
                      </div>
                    )}
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </CSSTransition>
        </div>

        <div
          className="orbit"
          style={{
            visibility: intervalId ? "visible" : "hidden",
            // transform:
            //   changeOfStep(modFromSec, inhaleExhale).index === 1
            //     ? `rotateZ(-175deg)`
            //     : changeOfStep(modFromSec, inhaleExhale).index === 3
            //     ? `rotateZ(-360deg)`
            //     : "",
            animationName: !stop ? "orbit" : "",

            // animationDuration: `${
            //   changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale"
            //     ? inhaleExhale[0].duration
            //     : changeOfStep(modFromSec, inhaleExhale).currentStep === "exhale"
            //     ? inhaleExhale[2].duration
            //     : 0
            // }s`,
            animationDuration: `${
              inhaleExhale[0].duration + inhaleExhale[2].duration
            }ms`,

            animationPlayState:
              pause ||
              changeOfStep(modFromSec, inhaleExhale).currentStep === "hold"
                ? "paused"
                : "running",
            // changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale" ||
            // changeOfStep(modFromSec, inhaleExhale).currentStep === "exhale"
            //   ? "running"
            //   : "paused",
          }}
        >
          <div
            className="sun2-wrapper"
            style={{
              // transform:
              //   changeOfStep(modFromSec, inhaleExhale).index === 1
              //     ? `rotateX(-90deg) rotateY(180deg) rotateZ(0deg)`
              //     : changeOfStep(modFromSec, inhaleExhale).index === 3
              //     ? `rotateX(-90deg) rotateY(0deg) rotateZ(0deg)`
              //     : "",
              // // display: intervalId || pause ? "grid" : "none",
              // animationName: !stop
              //   ? `${
              //       changeOfStep(modFromSec, inhaleExhale).currentStep ===
              //       "inhale"
              //         ? "invert"
              //         : changeOfStep(modFromSec, inhaleExhale).currentStep ===
              //           "exhale"
              //         ? "invert2"
              //         : "none"
              //     }`
              //   : "",
              // animationDuration: `${
              //   changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale"
              //     ? inhaleExhale[0].duration
              //     : changeOfStep(modFromSec, inhaleExhale).currentStep ===
              //       "exhale"
              //     ? inhaleExhale[2].duration
              //     : 0
              // }s`,
              animationName: !stop ? "invert" : "",
              animationDuration: `${
                inhaleExhale[0].duration + inhaleExhale[2].duration
              }ms`,
              animationPlayState:
                pause ||
                changeOfStep(modFromSec, inhaleExhale).currentStep === "hold"
                  ? "paused"
                  : "running",
              // changeOfStep(modFromSec, inhaleExhale).currentStep === "inhale" ||
              // changeOfStep(modFromSec, inhaleExhale).currentStep === "exhale"
              //   ? "running"
              //   : "paused",
            }}
          >
            <CSSTransition
              in={!pause}
              timeout={{ enter: 600, exit: 600 }}
              classNames="play_button_on_pause"
            >
              <div
                className="sun2"
                style={{
                  "--color1": "hsla(216, 100%, 94%, 1)",
                  "--color2": "hsla(206, 82%, 17%, 1)",
                  transform:
                    changeOfStep(modFromSec, inhaleExhale).index === 1 &&
                    changeOfStep(modFromSec, inhaleExhale).duration > 0
                      ? `scale(1.3,1.3)`
                      : changeOfStep(modFromSec, inhaleExhale).index === 3 &&
                        changeOfStep(modFromSec, inhaleExhale).duration > 0
                      ? `scale(1,1)`
                      : "",
                  // width:
                  //   changeOfStep(modFromSec, inhaleExhale).index === 1
                  //     ? `${1.4 * 1.8}rem`
                  //     : changeOfStep(modFromSec, inhaleExhale).index === 3
                  //     ? `${1.8}rem`
                  //     : "",
                  background:
                    changeOfStep(modFromSec, inhaleExhale).index === 3 &&
                    changeOfStep(modFromSec, inhaleExhale).duration > 0
                      ? "linear-gradient(to bottom, var(--color2), var(--color1)) top /250% 250%"
                      : changeOfStep(modFromSec, inhaleExhale).index === 1 &&
                        changeOfStep(modFromSec, inhaleExhale).duration > 0
                      ? "linear-gradient(to bottom, var(--color2), var(--color1)) bottom /250% 250%"
                      : "",

                  animationName: !stop
                    ? `${
                        changeOfStep(modFromSec, inhaleExhale).currentStep ===
                        "inhale"
                          ? "scale, sun_gradient"
                          : changeOfStep(modFromSec, inhaleExhale)
                              .currentStep === "exhale"
                          ? "scale2, sun_gradient2"
                          : "none"
                      }`
                    : "",
                  animationDuration: `${
                    changeOfStep(modFromSec, inhaleExhale).currentStep ===
                    "inhale"
                      ? inhaleExhale[0].duration
                      : changeOfStep(modFromSec, inhaleExhale).currentStep ===
                        "exhale"
                      ? inhaleExhale[2].duration
                      : 0
                  }ms,${
                    changeOfStep(modFromSec, inhaleExhale).currentStep ===
                    "inhale"
                      ? inhaleExhale[0].duration
                      : changeOfStep(modFromSec, inhaleExhale).currentStep ===
                        "exhale"
                      ? inhaleExhale[2].duration
                      : 0
                  }ms`,
                  animationTimingFunction: "linear, linear",
                  animationDirection: "normal, normal",
                  animationIterationCount: `1, 1`,
                  animationPlayState: `
                ${
                  pause
                    ? // changeOfStep(modFromSec, inhaleExhale).currentStep === "hold"
                      "paused"
                    : "running"
                }, ${
                    pause
                      ? // ||
                        // changeOfStep(modFromSec, inhaleExhale).currentStep === "hold"
                        "paused"
                      : "running"
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
                {/* {console.log(seconds)} */}
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
      <button
        className="transparent_layer"
        onClick={handleStart}
        ref={ref}
        aria-pressed={ariaPressed}
        aria-label="start and pause"
      ></button>
    </div>
  );
};
