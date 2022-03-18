import React, { useState } from "react";
import "./timeModalStyle.css";
import { Slider } from "./Slider";
import {
  durationToPosition,
  positionToDuration,
} from "../utils/DurationAndPosition.js";

export const TimeModal = ({
  setTimeOpen,
  durationOfSession,
  setDuration,
  handleStop,
}) => {
  const [isSliding, setSliding] = useState(false);
  const [thumbPos, setThumbPos] = useState(
    durationToPosition(durationOfSession) + 6
  );
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="time-modal" onMouseUp={() => setSliding(false)}>
          <div className="slider-parent">
            <div
              className="buble-number"
              style={{
                top: `${thumbPos}px`,
              }}
            >
              {positionToDuration(thumbPos)}
            </div>
            <Slider
              isSliding={isSliding}
              setSliding={setSliding}
              thumbPos={thumbPos}
              setThumbPos={setThumbPos}
            />

            <div
              className="buble-min"
              style={{
                top: `${thumbPos}px`,
              }}
            >
              min
            </div>
          </div>
          <div className="set-duration-button">
            <button
              onClick={() => {
                setTimeOpen(false);
                setDuration(positionToDuration(thumbPos));
                handleStop();
              }}
            >
              SET DURATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
