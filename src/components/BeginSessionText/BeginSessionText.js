import { React } from "react";
import "./beginSessionText.css";

export const BeginSessionText = ({ durationOfSession, chosenTechnique }) => {
  return (
    <div>
      <div className="begin-session">
        Begin your {durationOfSession} minute
        {durationOfSession > 1 ? "s" : ""}
        <br />
        <span style={{ fontWeight: "700", color: "hsla(216, 100%, 94%, 1)" }}>
          {chosenTechnique.name}
        </span>
        <br />
        breathing session
      </div>
    </div>
  );
};
