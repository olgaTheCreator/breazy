import React, { useState, useRef, useEffect } from "react";
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
  const ref = useRef(0);
  const [sliderHeight, setSliderHeight] = useState(1);
  const [isSliding, setSliding] = useState(false);
  console.log(sliderHeight);
  // useEffect(() => {}, [sliderHeight]);
  // console.log(
  //   sliderTrackRef.current.clientHeight,
  //   durationToPosition(3, sliderTrackRef.current.clientHeight),
  //   durationOfSession
  // );
  const [thumbPos, setThumbPos] = useState(0);
  //   durationToPosition(durationOfSession, sliderHeight)
  // );
  useEffect(
    () =>
      setThumbPos(
        durationToPosition(
          durationOfSession,
          sliderHeight - sliderHeight * 0.068
        )
      ),
    [sliderHeight]
  );
  console.log(thumbPos);
  return (
    <div className="darkBG">
      {/* <div className="modal-name">{""}</div> */}
      {/* <div className="centered"> */}
      <div className="time-modal" onMouseUp={() => setSliding(false)}>
        <div className="slider-parent">
          {/* <div
            className="buble-number"
            style={{
              top: `${thumbPos}px`,
            }}
          >
            {positionToDuration(thumbPos, sliderHeight)}
          </div> */}
          <div className="slider" ref={ref}>
            <Slider
              isSliding={isSliding}
              setSliding={setSliding}
              thumbPos={thumbPos}
              setThumbPos={setThumbPos}
              sliderHeight={sliderHeight}
              setSliderHeight={setSliderHeight}
            />
          </div>

          {/* <div
            className="buble-min"
            style={{
              top: `${thumbPos}px`,
            }}
          >
            min
          </div> */}
        </div>
        <div className="set-duration-button">
          <button
            onClick={() => {
              setTimeOpen(false);
              setDuration(positionToDuration(thumbPos, sliderHeight));
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
