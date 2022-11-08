import React from "react";
import "../../styles/modalsStyle.css";
import "./setDurationModal.css";
import { DurationSlider } from "../Slider/Slider";
import { Icon_Small } from "../SvgIcons/SmallIconSvg/Icon_Small/Icon_Small";
// import { CSSTransition } from "react-transition-group";
export const SetDurationModal = ({
  // setTimeOpen,
  dur,
  setDur,
  durationOfSession,
  // timeIsOpen,
}) => {
  // const [dur, setDur] = useState(durationOfSession);
  // const nodeRef = useRef(null);
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
    // <CSSTransition
    //   in={timeIsOpen}
    //   nodeRef={nodeRef}
    //   timeout={700}
    //   classNames="mountain_on_stop"
    // >
    <div className="darkBG">
      <div className="time-modal">
        <div className="modal-title">
          Session Length
          <p>set duration</p>
        </div>
        <div className="slider-parent">
          <div className="slider">
            <button onClick={() => (dur <= 29 ? setDur(dur + 1) : "")}>
              <Icon_Small />
            </button>
            {console.log(dur)}
            <DurationSlider
              onChange={handleDurationChange}
              durationOfSession={durationOfSession}
              click={dur}
            />
            <button onClick={() => (dur >= 2 ? setDur(dur - 1) : "")}>
              <Icon_Small />
            </button>
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
    // </CSSTransition>
  );
};
