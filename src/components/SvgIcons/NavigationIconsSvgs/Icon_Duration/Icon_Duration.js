import React from "react";
import "../navigationIconsSvgs.css";

export const Icon_Duration = () => {
  return (
    <div className="nav_icon">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 54 54"
        fill="none"
        version="1.1"
        id="svg1241"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="27"
          cy="27"
          r="27"
          fill="#2f373c"
          id="circle1207"
          className="circleOuter"
        />
        <g filter="url(#filter0_d_936_912)" id="g1211">
          <circle
            cx="27"
            cy="27"
            r="23"
            fill="url(#paint0_linear_936_912)"
            //    shape-rendering="crispEdges"
            id="circle1209"
            style={{ fill: "url(#paint0_linear_936_912)" }}
          />
        </g>
        <path
          d="M 26.987,14 C 19.811,14 14,19.824 14,27 14,34.176 19.811,40 26.987,40 34.176,40 40,34.176 40,27 40,19.824 34.176,14 26.987,14 Z M 27,37.4 c -5.746,0 -10.4,-4.654 -10.4,-10.4 0,-5.746 4.654,-10.4 10.4,-10.4 5.746,0 10.4,4.654 10.4,10.4 0,5.746 -4.654,10.4 -10.4,10.4 z M 27.65,20.5 H 25.7 v 7.8 l 6.825,4.095 0.975,-1.599 -5.85,-3.471 z"
          fill="#8c9cb0"
          id="path1213"
        />
        <defs id="defs1239">
          <filter
            id="filter0_d_936_912"
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
              id="feFlood1215"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
              id="feColorMatrix1217"
            />
            <feOffset dy="4" id="feOffset1219" />
            <feGaussianBlur stdDeviation="2" id="feGaussianBlur1221" />
            <feComposite in2="hardAlpha" operator="out" id="feComposite1223" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              id="feColorMatrix1225"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_936_912"
              id="feBlend1227"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_936_912"
              result="shape"
              id="feBlend1229"
            />
          </filter>
          <linearGradient
            id="paint0_linear_936_912"
            x1="27"
            y1="4"
            x2="27"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#292D30" id="stop1232" />
            <stop offset="0.961458" stopColor="#313538" id="stop1234" />
            <stop
              offset="1"
              stopColor="#292D30"
              stopOpacity="0"
              id="stop1236"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
