import React, { useEffect } from "react";
import "./slider.css";
import Slider from "rc-slider";

const marks = {
  1: {
    style: {
      left: "-1.5rem",
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
  useEffect(() => {
    const marksAria = document.getElementsByClassName("rc-slider-mark");
    marksAria[0].setAttribute("aria-hidden", "true");
  }, []);
  return (
    <Slider
      vertical
      min={1}
      max={30}
      defaultValue={durationOfSession}
      value={click}
      onChange={onChange}
      marks={marks}
      ariaLabelledByForHandle={"change_duration"}
    />
  );
};
