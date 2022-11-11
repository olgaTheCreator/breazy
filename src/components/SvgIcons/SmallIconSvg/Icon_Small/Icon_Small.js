import React from "react";
import "../smallIconSvg.css";

export const Icon_Small = ({ aria_hidden }) => {
  return (
    <div className="small_icon">
      <svg
        aria-hidden={aria_hidden}
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#2F373C" className="circleOuter" />
        <circle cx="12" cy="12" r="10" fill="url(#paint0_linear_936_916)" />
        <circle
          r="5"
          transform="matrix(1 0 0 -1 12 12)"
          fill="url(#paint1_linear_936_916)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_936_916"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#292D30" />
            <stop offset="0.961458" stopColor="#313538" />
            <stop offset="1" stopColor="#292D30" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_936_916"
            x1="5"
            y1="0"
            x2="5"
            y2="10"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#355770" />
            <stop offset="1" stopColor="#8C9FAD" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
