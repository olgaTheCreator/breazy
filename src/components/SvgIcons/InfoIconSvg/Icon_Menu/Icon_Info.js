import React from "react";
import "../infoIconSvg.css";

export const Icon_Info = () => {
  return (
    <div className="menu_icon">
      <svg
        aria-label="information menu"
        width="100%"
        height="100%"
        viewBox="0 0 54 54"
        fill="none"
        version="1.1"
        id="svg1770"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="27"
          cy="27"
          r="27"
          fill="#2f373c"
          id="circle2"
          className="circleOuter"
        />
        <g filter="url(#filter0_d_201_12)" id="g6">
          <circle
            cx="27"
            cy="27"
            r="23"
            fill="url(#paint0_linear_201_12)"
            //  shape-rendering="crispEdges"
            id="circle4"
            style={{ fill: "url(#paint0_linear_201_12)" }}
          />
        </g>
        <path
          d="m 26.999997,21.999955 c -0.723272,0 -1.416954,0.263454 -1.928454,0.732272 -0.5115,0.468818 -0.798818,1.104682 -0.798818,1.767818 v 15 c 0,0.663 0.287318,1.298864 0.798818,1.767682 C 25.583043,41.736545 26.276725,42 26.999997,42 c 0.723274,0 1.416955,-0.263455 1.928455,-0.732273 0.5115,-0.468818 0.798819,-1.104682 0.798819,-1.767682 v -15 c 0,-0.663136 -0.287319,-1.299 -0.798819,-1.767818 -0.5115,-0.468818 -1.205181,-0.732272 -1.928455,-0.732272 z m 0,-9.999955 c -0.674317,0 -1.333364,0.183273 -1.893954,0.526636 -0.560591,0.343364 -0.997636,0.831409 -1.255636,1.4025 -0.258,0.570955 -0.3255,1.199319 -0.194046,1.805455 0.131591,0.606273 0.456272,1.163045 0.933,1.60009 0.476864,0.437046 1.084227,0.734728 1.745591,0.855274 0.661228,0.120545 1.346728,0.05864 1.969636,-0.177819 0.622909,-0.236591 1.155409,-0.637091 1.53,-1.151045 0.374592,-0.513818 0.5745,-1.118046 0.5745,-1.736046 0,-0.828818 -0.359181,-1.623681 -0.998455,-2.209772 C 28.771225,12.329181 27.904088,12 26.999997,12 Z"
          fill="#8c9cb1"
          id="path8"
          style={{ strokeWidth: "1.36364" }}
        />
        <defs id="defs34">
          <filter
            id="filter0_d_201_12"
            x="0"
            y="4"
            width="54"
            height="54"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"
              id="feFlood10"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
              id="feColorMatrix12"
            />
            <feOffset dy="4" id="feOffset14" />
            <feGaussianBlur stdDeviation="2" id="feGaussianBlur16" />
            <feComposite in2="hardAlpha" operator="out" id="feComposite18" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              id="feColorMatrix20"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_201_12"
              id="feBlend22"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_201_12"
              result="shape"
              id="feBlend24"
            />
          </filter>
          <linearGradient
            id="paint0_linear_201_12"
            x1="27"
            y1="4"
            x2="27"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#292D30" id="stop27" />
            <stop offset="0.961458" stopColor="#313538" id="stop29" />
            <stop offset="1" stopColor="#292D30" stopOpacity="0" id="stop31" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
