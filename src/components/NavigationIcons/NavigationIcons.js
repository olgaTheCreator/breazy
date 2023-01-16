import React, { useState, useRef } from "react";
import "./navigationIcons.css";
import { Icon_Duration } from "../SvgIcons/NavigationIconsSvgs/Icon_Duration/Icon_Duration";
import { Icon_Vibrations_On } from "../SvgIcons/NavigationIconsSvgs/Icon_Vibrations_On/Icon_Vibrations_On";
import { Icon_Vibrations_Off } from "../SvgIcons/NavigationIconsSvgs/Icon_Vibrations_Off/Icon_Vibrations_Off";
import { Icon_Sound_On } from "../SvgIcons/NavigationIconsSvgs/Icon_Sound_On/Icon_Sound_On";
import { Icon_Sound_Off } from "../SvgIcons/NavigationIconsSvgs/Icon_Sound_Off/Icon_Sound_Off";
import { Icon_Techniques } from "../SvgIcons/NavigationIconsSvgs/Icon_Techniques/Icon_Techniques";
import { ChoosinTechniqueModal } from "../ChoosingTechniqueModal/ChoosingTechniquesModal";
import { SetDurationModal } from "../SetDurationModal/SetDurationModal";
import { motion, AnimatePresence } from "framer-motion";
import FocusLock from "react-focus-lock";

export const NavigationIcons = ({
  chosenTechnique,
  setTechnique,
  intervalId,
  setIntervalId,
  setSeconds,
  durationOfSession,
  setDuration,
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
  const techniquesRef = useRef(null);
  const durationRef = useRef(null);

  return (
    <div className="navContainer">
      <button
        className="navButtons"
        aria-label="set vibrations"
        onClick={() => {
          if (vibrations) setVibrations(false);
          else setVibrations(true);
        }}
      >
        {" "}
        <p>{vibrations ? "vibrations on" : "vibrations off"}</p>
        <div className="nav_button">
          {vibrations && <Icon_Vibrations_On />}
          {!vibrations && <Icon_Vibrations_Off />}
        </div>
      </button>
      <button
        aria-label="set sounds"
        className="navButtons"
        onClick={() => {
          if (sounds) setSounds(false);
          else setSounds(true);
        }}
      >
        <p>{sounds ? "sound on" : "sound off"}</p>
        <div className="nav_button">
          {sounds && <Icon_Sound_On />}
          {!sounds && <Icon_Sound_Off />}
        </div>
      </button>
      <button
        ref={durationRef}
        aria-expanded={timeIsOpen ? "true" : "false"}
        aria-pressed={timeIsOpen ? "true" : "false"}
        tabIndex="0"
        aria-label="set duration of breathing session"
        className={`navButtons ${timeIsOpen ? `visible-button` : ""}`}
        onClick={() => {
          setMenuOpen(false);
          if (timeIsOpen) {
            setTimeOpen(false);
            setDuration(dur);
            handleStop();
          } else setTimeOpen(true);
        }}
      >
        <p>duration</p>
        <div className="nav_button">
          <Icon_Duration />
        </div>
      </button>
      <button
        ref={techniquesRef}
        aria-expanded={techniquesAreOpen ? "true" : "false"}
        aria-pressed={techniquesAreOpen ? "true" : "false"}
        tabIndex="0"
        aria-label="choose technique"
        className={`navButtons ${techniquesAreOpen ? "visible-button" : ""}`}
        onClick={() => {
          setMenuOpen(false);
          techniquesAreOpen
            ? setTechniquesOpen(false)
            : setTechniquesOpen(true);
        }}
      >
        <p>techniques</p>
        <div className="nav_button">
          <Icon_Techniques />
        </div>
      </button>
      <AnimatePresence>
        {techniquesAreOpen && (
          <FocusLock shards={[techniquesRef]}>
            <motion.div
              data-testid="techniques motion div"
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
          </FocusLock>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {timeIsOpen && (
          <FocusLock shards={[durationRef]}>
            <motion.div
              data-testid="duration motion div"
              key="duration_modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
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
          </FocusLock>
        )}
      </AnimatePresence>
    </div>
  );
};
