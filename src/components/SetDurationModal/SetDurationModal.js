import React, { useRef } from "react";
import "../../styles/modalsStyle.css";
import "./setDurationModal.css";
import { DurationSlider } from "../Slider/Slider";
import { Icon_Small } from "../SvgIcons/SmallIconSvg/Icon_Small/Icon_Small";

export const SetDurationModal = ({ dur, setDur, durationOfSession }) => {
  const nodeRef = useRef(null);
  return (
    <div className="darkBG">
      <div className="time-modal" ref={nodeRef}>
        <div className="modal-title">
          Session Length
          <p id="change_duration">set duration</p>
        </div>
        <div className="slider-parent">
          <div className="slider">
            <button
              aria-label="increase duration"
              onClick={() => (dur <= 29 ? setDur(dur + 1) : "")}
            >
              <Icon_Small />
            </button>
            <DurationSlider
              onChange={setDur}
              durationOfSession={durationOfSession}
              click={dur}
            />
            <button
              aria-label="decrease duration"
              onClick={() => (dur >= 2 ? setDur(dur - 1) : "")}
            >
              <Icon_Small />
            </button>
          </div>
          <div className="duration-display">{dur} min</div>
        </div>
      </div>
    </div>
  );
};
