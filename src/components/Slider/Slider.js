import React, { useRef } from "react";
import "./slider.css";
import {
  thumbTopPosMax,
  thumbTopPosMin,
  countVh,
} from "../../utils/DurationAndPosition.js";
import { debounce } from "../../utils/Debounce";

export const Slider = ({ isSliding, setSliding, setThumbPos, thumbPos }) => {
  const sliderTrack = useRef(null);

  const handleClick = (e) => {
    console.log(e, e.clientY, sliderTrack.current.offsetTop);
    debounce(setThumbPos(e.clientY - sliderTrack.current.offsetTop), 10);

    console.log(thumbPos);
  };
  // const clientYref = useRef(0);

  // const handleClick = (e) => {
  //   console.log(e);
  //   e.clientY - countVh * 35.8 < countVh * 3.308
  //     ? (clientYref.current = countVh * thumbTopPosMin)
  //     : e.clientY - countVh * 35.8 > countVh * thumbTopPosMax
  //     ? (clientYref.current = countVh * thumbTopPosMax)
  //     : (clientYref.current = e.clientY - countVh * 35.8);
  //   debounce(setThumbPos(clientYref.current), 100);
  // };
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
      ref={sliderTrack}
    >
      <div
        className="slider-track"
        onClick={handleClick}
        style={{
          backgroundImage: `linear-gradient(to top, hsla(206, 39%, 30%, 1),  hsla(206, 39%, 30%, 1) ${Math.floor(
            (1 -
              (thumbPos - thumbTopPosMin * countVh) /
                ((thumbTopPosMax - thumbTopPosMin) * countVh)) *
              100
          )}%,hsla(204, 12%, 16%, 1) ${Math.floor(
            (1 -
              (thumbPos - thumbTopPosMin * countVh) /
                ((thumbTopPosMax - thumbTopPosMin) * countVh)) *
              100
          )}%, hsla(204, 12%, 16%, 1) ${Math.ceil(
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
        style={{ top: `${thumbPos}px` }}
      ></div>
    </div>
  );
};
