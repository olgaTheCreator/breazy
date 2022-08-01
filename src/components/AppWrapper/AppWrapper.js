import React, { useState, useEffect } from "react";
import "../../styles/style.css";
import { debounce } from "../../utils/Debounce";

export const AppWrapper = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    vh: window.innerHeight * 0.01,
  });
  document.documentElement.style.setProperty("--vh", `${dimensions.vh}px`);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        vh: window.innerHeight * 0.01,
      });
    }, 250);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return <div className="app-container"> {children} </div>;
};
