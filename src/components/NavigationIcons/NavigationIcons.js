import React, { useState } from "react";
import "./navigationIcons.css";
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
        <button
          className={`${vibrations ? "button1-vib" : "button1-novib"} `}
        ></button>
      </div>
      <div
        className="navButtons"
        onClick={() => {
          if (sounds) setSounds(false);
          else setSounds(true);
        }}
      >
        <p>{sounds ? "sound on" : "sound off"}</p>
        <button
          className={`${sounds ? "button2-sound" : "button2-nosound"} `}
        ></button>
      </div>
      <div
        className={`navButtons ${timeIsOpen ? "visible-button" : ""}`}
        onClick={() => {
          // handlePause();
          setMenuOpen(false);
          timeIsOpen ? setTimeOpen(false) : setTimeOpen(true);
        }}
      >
        <p>time</p>
        <button className="button3"></button>
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
        <button className="button4"></button>
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
        />
      )}
    </div>
  );
};
