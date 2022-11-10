import React, { useState } from "react";
import "./navigationIcons.css";
import { Icon_Duration } from "../SvgIcons/NavigationIconsSvgs/Icon_Duration/Icon_Duration";
import { Icon_Vibrations_On } from "../SvgIcons/NavigationIconsSvgs/Icon_Vibrations_On/Icon_Vibrations_On";
import { Icon_Vibrations_Off } from "../SvgIcons/NavigationIconsSvgs/Icon_Vibrations_Off/Icon_Vibrations_Off";
import { Icon_Sound_On } from "../SvgIcons/NavigationIconsSvgs/Icon_Sound_On/Icon_Sound_On";
import { Icon_Sound_Off } from "../SvgIcons/NavigationIconsSvgs/Icon_Sound_Off/Icon_Sound_Off";
import { Icon_Techniques } from "../SvgIcons/NavigationIconsSvgs/Icon_Techniques/Icon_Techniques";
import { ChoosinTechniqueModal } from "../ChoosingTechniqueModal/ChoosingTechniquesModal";
import { SetDurationModal } from "../SetDurationModal/SetDurationModal";
// import { CSSTransition } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";

export const NavigationIcons = ({
  chosenTechnique,
  setTechnique,
  intervalId,
  setIntervalId,
  setSeconds,
  durationOfSession,
  setDuration,
  // handlePause,
  handleStop,
  vibrations,
  setVibrations,
  sounds,
  setSounds,
  setMenuOpen,
}) => {
  const [techniquesAreOpen, setTechniquesOpen] = useState(false);
  const [timeIsOpen, setTimeOpen] = useState(false);
  const [dur, setDur] = useState(durationOfSession);

  return (
    <div className="navContainer">
      <div
        className="navButtons"
        onClick={() => {
          if (vibrations) setVibrations(false);
          else setVibrations(true);
        }}
      >
        {" "}
        <p>{vibrations ? "vibrations on" : "vibrations off"}</p>
        <button className="nav_button">
          {/* className={`${vibrations ? "button1-vib" : "button1-novib"} `}> */}
          {/* <div className="svg_size"> */}
          {vibrations && <Icon_Vibrations_On />}
          {!vibrations && <Icon_Vibrations_Off />}
          {/* </div> */}
        </button>
      </div>
      <div
        className="navButtons"
        onClick={() => {
          if (sounds) setSounds(false);
          else setSounds(true);
        }}
      >
        <p>{sounds ? "sound on" : "sound off"}</p>
        <button className="nav_button">
          {sounds && <Icon_Sound_On />}
          {!sounds && <Icon_Sound_Off />}
        </button>
      </div>
      <div
        className={`navButtons ${timeIsOpen ? `visible-button` : ""}`}
        onClick={() => {
          // handlePause();
          setMenuOpen(false);
          if (timeIsOpen) {
            setTimeOpen(false);
            setDuration(dur);
            handleStop();
          } else setTimeOpen(true);
        }}
      >
        <p>time</p>
        <button className="nav_button">
          <Icon_Duration />
        </button>
      </div>
      <div
        className={`navButtons ${techniquesAreOpen ? "visible-button" : ""}`}
        onClick={() => {
          setMenuOpen(false);
          techniquesAreOpen
            ? setTechniquesOpen(false)
            : setTechniquesOpen(true);
          // handlePause();
        }}
      >
        <p>techniques</p>
        <button className="nav_button">
          <Icon_Techniques />
        </button>
      </div>
      {/* {console.log(timeIsOpen)} */}
      {/* <CSSTransition
        in={techniquesAreOpen}
        nodeRef={nodeRef2}
        timeout={{ enter: 400, exit: 500 }}
        classNames="fade_in"
        unmountOnExit
      >
        <div ref={nodeRef2}>
          {techniquesAreOpen && (
            <ChoosinTechniqueModal
              setTechniquesOpen={setTechniquesOpen}
              chosenTechnique={chosenTechnique}
              setTechnique={setTechnique}
              intervalId={intervalId}
              setIntervalId={setIntervalId}
              setSeconds={setSeconds}
              handleStop={handleStop}
            />
          )}
        </div>
      </CSSTransition> */}
      {/* <CSSTransition
        in={timeIsOpen}
        nodeRef={nodeRef}
        timeout={{ enter: 400, exit: 500 }}
        classNames="fade_in"
        mountOnEnter
        exit
      >
        <div ref={nodeRef}>
          {timeIsOpen && (
            <SetDurationModal
              setTimeOpen={setTimeOpen}
              timeIsOpen={timeIsOpen}
              durationOfSession={durationOfSession}
              setDuration={setDuration}
              handleStop={handleStop}
              dur={dur}
              setDur={setDur}
            />
          )}
        </div>
      </CSSTransition> */}
      <AnimatePresence>
        {techniquesAreOpen && (
          <motion.div
            key="techniques_modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ChoosinTechniqueModal
              setTechniquesOpen={setTechniquesOpen}
              chosenTechnique={chosenTechnique}
              setTechnique={setTechnique}
              intervalId={intervalId}
              setIntervalId={setIntervalId}
              setSeconds={setSeconds}
              handleStop={handleStop}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {timeIsOpen && (
          <motion.div
            key="duration_modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // transition={{ duration: 0.6 }}
          >
            <SetDurationModal
              setTimeOpen={setTimeOpen}
              timeIsOpen={timeIsOpen}
              durationOfSession={durationOfSession}
              setDuration={setDuration}
              handleStop={handleStop}
              dur={dur}
              setDur={setDur}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
