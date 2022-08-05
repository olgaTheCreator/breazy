import React, { useState } from "react";
import "../../styles/modalsStyle.css";
import "./setDurationModal.css";
import { Slider } from "../Slider/Slider";
import {
  durationToPosition,
  positionToDuration,
} from "../../utils/DurationAndPosition.js";

export const SetDurationModal = ({
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
      {/* <div className="modal-name">{""}</div> */}
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
            <div className="slider">
              <Slider
                isSliding={isSliding}
                setSliding={setSliding}
                thumbPos={thumbPos}
                setThumbPos={setThumbPos}
              />
            </div>

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
              SET
            </button>
          </div>
        </div>
      </div>
      <div className="hmm">hello</div>
    </div>
  );
};
