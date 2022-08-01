import React, { useRef } from "react";
import "./slider.css";
import {
  thumbTopPosMax,
  thumbTopPosMin,
  countVh,
} from "../../utils/DurationAndPosition.js";
import { debounce } from "../../utils/Debounce";

export const Slider = ({ isSliding, setSliding, setThumbPos, thumbPos }) => {
  const clientYref = useRef(0);

  const handleClick = (e) => {
    e.clientY - countVh * 35.8 < countVh * 3.308
      ? (clientYref.current = countVh * thumbTopPosMin)
      : e.clientY - countVh * 35.8 > countVh * thumbTopPosMax
      ? (clientYref.current = countVh * thumbTopPosMax)
      : (clientYref.current = e.clientY - countVh * 35.8);
    debounce(setThumbPos(clientYref.current), 100);
  };
  const handleMouseDown = () => {
    setSliding(true);
  };

  const handleMouseUp = () => {
    if (isSliding) {
      setSliding(false);
    }
  };

  const handleMouseMove = (e) => {
    if (isSliding) {
      e.preventDefault();
      handleClick(e);
    }
  };

  const handleTouchMove = (e) => {
    const touch = e.targetTouches[0];
    handleClick(touch);
  };
  return (
    <div
      className="slider-wrapper"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="slider-track"
        onClick={handleClick}
        style={{
          backgroundImage: `linear-gradient(to top, #e8e1d4,  #e8e1d4 ${Math.floor(
            (1 -
              (thumbPos - thumbTopPosMin * countVh) /
                ((thumbTopPosMax - thumbTopPosMin) * countVh)) *
              100
          )}%,#8ea8a0 ${Math.floor(
            (1 -
              (thumbPos - thumbTopPosMin * countVh) /
                ((thumbTopPosMax - thumbTopPosMin) * countVh)) *
              100
          )}%, #8ea8a0 ${Math.ceil(
            ((thumbPos - thumbTopPosMin * countVh) /
              ((thumbTopPosMax - thumbTopPosMin) * countVh)) *
              100
          )}%)`,
        }}
      ></div>
      <div
        className="slider-thumb"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          top: `${thumbPos}px`,
        }}
      ></div>
    </div>
  );
};
