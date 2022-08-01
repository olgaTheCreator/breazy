import { React, useEffect, useState } from "react";
import "./beginSessionText.css";
// import { ShowingTechniqueName } from "../ShowingTechniqueName/ShowingTechniqueName";

export const BeginSessionText = ({ durationOfSession, chosenTechnique }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => setVisible(true);
  }, [chosenTechnique]);

  // return <div>{visible ? chosenTechnique.name : ""}</div>;
  return (
    <div>
      {visible ? (
        <div className="begin-session">
          Begin your {durationOfSession} minute
          {durationOfSession > 1 ? "s" : ""}
          <br />
          <span style={{ fontWeight: "800", color: "hsla(216, 100%, 94%, 1)" }}>
            {chosenTechnique.name}
          </span>
          {/* {<ShowingTechniqueName chosenTechnique={chosenTechnique} />} */}
          <br />
          breathing session
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

// const beginSessionStyles = {
//   span: {
//     color: "#455a6e",
//     shadowColor: "transparent",
//   },
// };
