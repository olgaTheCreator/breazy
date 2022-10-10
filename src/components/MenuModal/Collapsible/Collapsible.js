import React, { useState } from "react";
import "./collapsible.css";

export const Collapsible = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div>
      <button onClick={toggle}>{props.label}</button>
      {open && <div>{props.children}</div>}
    </div>
  );
};
