import React from "react";
import "../../styles/modalsStyle.css";
import "./choosingTechniqueModal.css";
import { breathingTechniques } from "../../data/breathingTechniques";
import { Icon_Small } from "../SvgIcons/SmallIconSvg/Icon_Small/Icon_Small";

export const ChoosinTechniqueModal = ({
  setTechniquesOpen,
  setTechnique,
  handleStop,
}) => {
  const aria_hidden = "true";
  return (
    <div className="darkBG">
      <div className="modal">
        <div className="techniques-parent">
          <div className="modal-name">
            Techniques
            <p>choose technique</p>
          </div>
          <div className="list-of-techniques">
            <ul>
              {breathingTechniques.map((a, index) => (
                <li key={a.id}>
                  <button
                    tabIndex="0"
                    onClick={() => {
                      handleStop();
                      setTechnique(breathingTechniques[index]);
                      setTechniquesOpen(false);
                    }}
                  >
                    <Icon_Small aria_hidden={aria_hidden} />
                    <span
                      className="technique-name"
                      data-testid="technique-name"
                    >
                      {a.name}
                    </span>{" "}
                    <span
                      style={{
                        margin: "0 1em 0 0",
                        fontSize: "0.45rem",
                        textAlign: "right",
                        color: " hsla(212, 18%, 60%, 1)",
                      }}
                      data-testid="steps-durations"
                    >
                      {a.inhaleExhale[0].duration / 1000}-
                      {a.inhaleExhale[1].duration / 1000}-
                      {a.inhaleExhale[2].duration / 1000}-
                      {a.inhaleExhale[3].duration / 1000}
                      <br />
                    </span>
                    <p
                      className="short-description"
                      data-testid="short-description"
                    >
                      {a.shortDescription}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
