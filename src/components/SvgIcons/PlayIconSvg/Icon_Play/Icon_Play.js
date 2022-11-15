import React from "react";
import "../playIconSvg.css";

export const Icon_Play = () => {
  return (
    <div className="play_icon">
      <svg
        aria-label="play and pause"
        width="0"
        height="0"
        viewBox="-4 -5 96.197502 105.611946"
        fill="none"
        version="1.1"
        id="svg11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#shadow)">
          <path
            d="m 81.296,36.852369 c 9.202,5.3127 9.202,18.5945 0,23.9072 l -60.5918,34.9824 C 11.5023,101.05497 0,94.413969 0,83.788969 v -69.9656 C 0,3.1979695 11.5023,-3.4429305 20.7042,1.8698695 Z"
            fill="url(#paint0_linear_628_673)"
            id="path2"
            style={{ fill: "url(#paint0_linear_628_673)" }}
          />
        </g>
        <defs id="defs9">
          <filter id="shadow" colorInterpolationFilters="sRGB">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="0.6"
              floodColor="rgba(0, 0, 0, 0.6"
              // floodOpacity="0.8"
            />
            <feDropShadow
              dx="5"
              dy="5"
              stdDeviation="1"
              floodColor="#2B2C2D"
              floodOpacity="0.5"
            />
          </filter>
          <linearGradient
            id="paint0_linear_628_673"
            x1="136"
            y1="68"
            x2="-2.9723701e-06"
            y2="68"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-34,-19.194031)"
          >
            <stop stopColor="#2D506A" id="stop4" />
            <stop offset="1" stopColor="#DFECFF" id="stop6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
