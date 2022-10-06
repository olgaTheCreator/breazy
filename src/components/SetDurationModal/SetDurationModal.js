import React, { useState } from "react";
import "../../styles/modalsStyle.css";
import "./setDurationModal.css";
import { DurationSlider } from "../Slider/Slider";

export const SetDurationModal = ({
  setTimeOpen,
  setDuration,
  handleStop,
  durationOfSession,
}) => {
  // const ref = useRef(0);
  // const [sliderHeight, setSliderHeight] = useState(1);
  // const [isSliding, setSliding] = useState(false);
  // console.log(sliderHeight);
  // useEffect(() => {}, [sliderHeight]);
  // console.log(
  //   sliderTrackRef.current.clientHeight,
  //   durationToPosition(3, sliderTrackRef.current.clientHeight),
  //   durationOfSession
  // );
  // const [thumbPos, setThumbPos] = useState(0);
  //   durationToPosition(durationOfSession, sliderHeight)
  // );
  // useEffect(
  //   () =>
  //     setThumbPos(
  //       durationToPosition(
  //         durationOfSession,
  //         sliderHeight - sliderHeight * 0.068
  //       )
  //     ),
  //   [sliderHeight]
  // );
  // console.log(thumbPos);
  const [dur, setDur] = useState(3);
  const handleDurationChange = (value) => {
    setDur(value);
  };
  return (
    <div className="darkBG">
      <div className="time-modal">
        <div className="modal-title">
          Session Length
          <p>set duration</p>
        </div>
        <div className="slider-parent">
          <div className="slider">
            <DurationSlider
              onChange={handleDurationChange}
              durationOfSession={durationOfSession}
            />
          </div>
          <div className="duration-display">{dur} min</div>
          {console.log(durationOfSession)}
        </div>
        <div className="set-duration-button">
          <button
            onClick={() => {
              setTimeOpen(false);
              setDuration(dur);
              handleStop();
            }}
          >
            SET
          </button>
        </div>
      </div>
    </div>
  );
};
