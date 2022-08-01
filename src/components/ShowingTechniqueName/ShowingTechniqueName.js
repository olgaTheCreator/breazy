import React, { useState, useEffect } from "react";

export const ShowingTechniqueName = ({ chosenTechnique }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => setVisible(true);
  }, [chosenTechnique]);

  return <div>{visible ? chosenTechnique.name : ""}</div>;
};
