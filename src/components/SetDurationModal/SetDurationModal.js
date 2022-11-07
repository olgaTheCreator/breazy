import React from "react";
import "../../styles/modalsStyle.css";
import "./setDurationModal.css";
import { DurationSlider } from "../Slider/Slider";

export const SetDurationModal = ({
  // setTimeOpen,
  dur,
  setDur,
  durationOfSession,
}) => {
  // const [dur, setDur] = useState(durationOfSession);
  const handleDurationChange = (value) => {
    setDur(value);
  };
  // useEffect(() => {
  //   return () => {
  //     setDuration(dur);
  //     handleStop();
  //   };
  // }, [dur]);
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
          {console.log(dur, durationOfSession)}
        </div>
        {/* <div className="set-duration-button">
          <button
            onClick={() => {
              setTimeOpen(false);
              setDuration(dur);
              handleStop();
            }}
          >
            SET
          </button>
        </div> */}
      </div>
    </div>
  );
};
