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
  handlePause,
  handleStop,
  vibrations,
  setVibrations,
  sounds,
  setSounds,
}) => {
  const [techniquesAreOpen, setTechniquesOpen] = useState(false);
  const [timeIsOpen, setTimeOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="navContainer">
      <div
        onClick={() => {
          if (vibrations) setVibrations(false);
          else setVibrations(true);
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {" "}
        <p>{isHovering && (vibrations ? "vibrations on" : "vibrations off")}</p>
        <button
          className={vibrations ? "button1-vib" : "button1-novib"}
        ></button>
      </div>
      <div
        onClick={() => {
          if (sounds) setSounds(false);
          else setSounds(true);
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p>{isHovering && (sounds ? "sound on" : "sound off")}</p>
        <button
          className={sounds ? "button2-sound" : "button2-nosound"}
        ></button>
      </div>
      <div
        className={`${timeIsOpen ? "visible-button" : ""}`}
        onClick={() => {
          handlePause();
          timeIsOpen ? setTimeOpen(false) : setTimeOpen(true);
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p>time</p>
        <button className="button3"></button>
      </div>
      <div
        className={`${techniquesAreOpen ? "visible-button" : ""}`}
        onClick={() => {
          techniquesAreOpen
            ? setTechniquesOpen(false)
            : setTechniquesOpen(true);
          handlePause();
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
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
