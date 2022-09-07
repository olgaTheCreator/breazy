import React from "react";
import "./slider.css";
// import {
//   thumbTopPosMax,
//   thumbTopPosMin,
//   countVh,
// } from "../../utils/DurationAndPosition.js";
import { debounce } from "../../utils/Debounce";

export const Slider = ({
  isSliding,
  setSliding,
  setThumbPos,
  thumbPos,
  forwardedRef,
}) => {
  // const forwardedRef = useRef(0);

  const handleClick = (e) => {
    console.log(
      e,
      e.clientY,
      forwardedRef.current.offsetTop +
        forwardedRef.current.parentElement.offsetTop,
      forwardedRef.current.firstChild.clientHeight
    );
    const position =
      e.clientY -
      (forwardedRef.current.offsetTop +
        forwardedRef.current.parentElement.offsetTop) -
      forwardedRef.current.firstChild.clientHeight / 2;
    debounce(
      position <= forwardedRef.current.firstChild.clientHeight / 2
        ? setThumbPos(-forwardedRef.current.firstChild.clientHeight / 2)
        : position >= forwardedRef.current.clientHeight
        ? setThumbPos(
            forwardedRef.current.clientHeight -
              forwardedRef.current.firstChild.clientHeight / 2
          )
        : setThumbPos(position),
      0
    );

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
    >
      <div
        className="slider-track"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
        ref={forwardedRef}
        style={{
          backgroundImage: `linear-gradient(to top, hsla(206, 39%, 30%, 1),  hsla(206, 39%, 30%, 1) ${Math.floor(
            (1 - thumbPos / forwardedRef.current.clientHeight) * 100
          )}%,hsla(204, 12%, 16%, 1) ${Math.floor(
            (1 - thumbPos / forwardedRef.current.clientHeight) * 100
          )}%, hsla(204, 12%, 16%, 1) ${Math.ceil(
            (1 - thumbPos / forwardedRef.current.clientHeight) * 100
          )}%)`,
        }}
      >
        <div
          className="slider-thumb"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{ top: `${thumbPos}px` }}
        ></div>
      </div>
    </div>
  );
};
