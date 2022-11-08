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
        className={`${timeIsOpen ? `visible-button` : ""}`}
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
        className={`${techniquesAreOpen ? "visible-button" : ""}`}
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
      {timeIsOpen && (
        <SetDurationModal
          setTimeOpen={setTimeOpen}
          durationOfSession={durationOfSession}
          setDuration={setDuration}
          handleStop={handleStop}
          dur={dur}
          setDur={setDur}
        />
      )}
    </div>
  );
};
