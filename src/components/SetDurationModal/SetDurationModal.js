import React, { useState, useRef } from "react";
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
  const sliderTrackRef = useRef(0);
  const [isSliding, setSliding] = useState(false);
  console.log(
    sliderTrackRef.current.clientHeight,
    durationToPosition(3, sliderTrackRef.current.clientHeight),
    durationOfSession
  );
  const [thumbPos, setThumbPos] = useState(
    durationToPosition(durationOfSession, sliderTrackRef.current.clientHeight)
  );
  console.log(thumbPos);
  return (
    <div className="darkBG">
      {/* <div className="modal-name">{""}</div> */}
      {/* <div className="centered"> */}
      <div className="time-modal" onMouseUp={() => setSliding(false)}>
        <div className="slider-parent">
          <div
            className="buble-number"
            style={{
              top: `${thumbPos}px`,
            }}
          >
            {positionToDuration(thumbPos, sliderTrackRef.current.clientHeight)}
          </div>
          <div className="slider">
            <Slider
              isSliding={isSliding}
              setSliding={setSliding}
              thumbPos={thumbPos}
              setThumbPos={setThumbPos}
              forwardedRef={sliderTrackRef}
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
        {/* </div> */}
      </div>
    </div>
  );
};
