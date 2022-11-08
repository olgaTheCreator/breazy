import React from "react";
import "./slider1.css";
import Slider from "rc-slider";

const marks = {
  1: {
    style: {
      // bottom: "-5%",
      // top: "-12%",
      left: "-1.5rem",
      // transform: "none",
      // transform: "translateY(-50%)",
    },
    label: 1,
  },
  2: " ",
  3: " ",
  4: " ",
  5: " ",
  6: " ",
  7: " ",
  8: " ",
  9: " ",
  10: " ",
  11: " ",
  12: " ",
  13: " ",
  14: " ",
  15: " ",
  16: " ",
  17: " ",
  18: " ",
  19: " ",
  20: " ",
  21: " ",
  22: " ",
  23: " ",
  24: " ",
  25: " ",
  26: " ",
  27: " ",
  28: " ",
  29: " ",
  30: {
    style: {},
    label: 30,
  },
};

export const DurationSlider = ({ click, onChange, durationOfSession }) => {
  return (
    // <div className="slider-wrapper">
    <Slider
      vertical
      min={1}
      max={30}
      defaultValue={durationOfSession}
      value={click}
      onChange={onChange}
      marks={marks}
    />
    // </div>
  );
};

// export const Slider = ({
//   isSliding,
//   setSliding,
//   setThumbPos,
//   thumbPos,
//   sliderHeight,
//   setSliderHeight,
// }) => {
//   // const sliderTrackRef = useRef(0);
//   const sliderTrackRef = useRef(0);
//   let trackHeight = 0;

//   useEffect(() => {
//     // 👇️ (better) use a ref
//     setSliderHeight(sliderTrackRef.current.clientHeight);
//     trackHeight = sliderTrackRef.current.firstChild.clientHeight;
//     console.log(trackHeight);
//     console.log(sliderHeight);
//   }, [sliderTrackRef.current.clientHeight]);
//   const handleClick = (e) => {
//     // console.log(
//     //   e,
//     //   e.clientY,
//     //   sliderTrackRef.current.offsetTop +
//     //     sliderTrackRef.current.parentElement.offsetTop,
//     //   sliderTrackRef.current.firstChild.clientHeight
//     // );
//     const position =
//       e.clientY -
//       (sliderTrackRef.current.offsetTop +
//         sliderTrackRef.current.parentElement.offsetTop) -
//       sliderTrackRef.current.firstChild.clientHeight / 2;
//     debounce(
//       position <= 0
//         ? setThumbPos(-sliderTrackRef.current.firstChild.clientHeight / 2)
//         : position >= sliderTrackRef.current.clientHeight
//         ? setThumbPos(
//             sliderTrackRef.current.clientHeight -
//               sliderTrackRef.current.firstChild.clientHeight
//           )
//         : setThumbPos(position),
//       50
//     );
//   };
//   console.log(thumbPos);
//   // const clientYref = useRef(0);

//   // const handleClick = (e) => {
//   //   console.log(e);
//   //   e.clientY - countVh * 35.8 < countVh * 3.308
//   //     ? (clientYref.current = countVh * thumbTopPosMin)
//   //     : e.clientY - countVh * 35.8 > countVh * thumbTopPosMax
//   //     ? (clientYref.current = countVh * thumbTopPosMax)
//   //     : (clientYref.current = e.clientY - countVh * 35.8);
//   //   debounce(setThumbPos(clientYref.current), 100);
//   // };
//   const handleMouseDown = () => {
//     setSliding(true);
//   };

//   const handleMouseUp = () => {
//     if (isSliding) {
//       setSliding(false);
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (isSliding) {
//       e.preventDefault();
//       handleClick(e);
//     }
//   };

//   const handleTouchMove = (e) => {
//     const touch = e.targetTouches[0];
//     handleClick(touch);
//   };
//   return (
//     <div
//       className="slider-wrapper"
//       onMouseMove={handleMouseMove}
//       onTouchMove={handleTouchMove}
//       onMouseUp={handleMouseUp}
//     >
//       {" "}
//       <div
//         className="buble-number"
//         // style={{
//         //   top: "50%",
//         // }}
//       >
//         {thumbPos <= sliderHeight * 0.01
//           ? positionToDuration(0, sliderHeight)
//           : positionToDuration(thumbPos, sliderHeight - sliderHeight * 0.036)}
//         {` min`}
//       </div>
//       <div
//         className="slider-track"
//         onMouseMove={handleMouseMove}
//         onTouchMove={handleTouchMove}
//         onMouseUp={handleMouseUp}
//         onClick={handleClick}
//         ref={sliderTrackRef}
//         style={{
//           backgroundImage: `linear-gradient(to top, hsla(206, 39%, 30%, 1),  hsla(206, 39%, 30%, 1) ${Math.floor(
//             (1 - thumbPos / sliderTrackRef.current.clientHeight) * 100
//           )}%,hsla(204, 12%, 16%, 1) ${Math.floor(
//             (1 - thumbPos / sliderTrackRef.current.clientHeight) * 100
//           )}%, hsla(204, 12%, 16%, 1) ${Math.ceil(
//             (1 - thumbPos / sliderTrackRef.current.clientHeight) * 100
//           )}%)`,
//         }}
//       >
//         <div
//           className="slider-thumb"
//           onMouseDown={handleMouseDown}
//           onMouseUp={handleMouseUp}
//           style={{ top: `${thumbPos}px` }}
//         ></div>
//       </div>
//       {/* <div
//         className="buble-min"
//         style={{
//           top: `${thumbPos}px`,
//         }}
//       >
//         min
//       </div> */}
//     </div>
//   );
// };
