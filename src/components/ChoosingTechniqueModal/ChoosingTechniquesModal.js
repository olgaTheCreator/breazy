import React from "react";
import "../../styles/modalsStyle.css";
import "./choosingTechniqueModal.css";
import { breathingTechniques } from "../../data/breathingTechniques";

export const ChoosinTechniqueModal = ({
  setTechniquesOpen,
  setTechnique,
  handleStop,
}) => {
  return (
    <div
      className="darkBG"
      onClick={() => {
        setTechniquesOpen(false);
      }}
    >
      <div className="modal">
        <div className="techniques-parent">
          <div className="modal-name">
            Techniques
            <p>choose technique</p>
          </div>
          <div className="list-of-techniques">
            <ul>
              {breathingTechniques.map((a, index) => (
                <li
                  key={a.id}
                  onClick={() => {
                    handleStop();
                    setTechnique(breathingTechniques[index]);
                    setTechniquesOpen(false);
                  }}
                >
                  {a.name}{" "}
                  <span
                    style={{
                      margin: "0 1em 0 0",
                      fontSize: "0.45rem",
                      textAlign: "right",
                      color: " hsla(212, 18%, 60%, 1)",
                    }}
                  >
                    {a.inhaleExhale[0].duration}-{a.inhaleExhale[1].duration}-
                    {a.inhaleExhale[2].duration}-{a.inhaleExhale[3].duration}
                    <br />
                  </span>
                  <p className="short-description">{a.shortDescription}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
