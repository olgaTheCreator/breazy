import React, { useRef } from "react";
import "../../styles/modalsStyle.css";
import "./setDurationModal.css";
import { DurationSlider } from "../Slider/Slider";
import { Icon_Small } from "../SvgIcons/SmallIconSvg/Icon_Small/Icon_Small";
// import { CSSTransition } from "react-transition-group";
// import { createPortal } from "react-dom";

export const SetDurationModal = ({
  // setTimeOpen,
  dur,
  setDur,
  durationOfSession,
  // timeIsOpen,
}) => {
  // const [dur, setDur] = useState(durationOfSession);
  const nodeRef = useRef(null);
  const handleDurationChange = (value) => {
    setDur(value);
  };
  return (
    <div className="darkBG">
      <div className="time-modal" ref={nodeRef}>
        <div className="modal-title">
          Session Length
          <p>set duration</p>
        </div>
        <div className="slider-parent">
          <div className="slider">
            <button onClick={() => (dur <= 29 ? setDur(dur + 1) : "")}>
              <Icon_Small />
            </button>
            <DurationSlider
              onChange={handleDurationChange}
              durationOfSession={durationOfSession}
              click={dur}
            />
            <button onClick={() => (dur >= 2 ? setDur(dur - 1) : "")}>
              <Icon_Small aria_hidden />
            </button>
          </div>
          <div className="duration-display">{dur} min</div>
        </div>
      </div>
    </div>
  );
};
