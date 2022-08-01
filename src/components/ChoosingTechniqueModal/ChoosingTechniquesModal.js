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
      <div className="modal-name">techniques</div>
      <div className="centered">
        <div className="modal">
          <ul className="list-of-techniques">
            {breathingTechniques.map((a, index) => (
              <li
                key={a.id}
                onClick={() => {
                  handleStop();
                  setTechnique(breathingTechniques[index]),
                    setTechniquesOpen(false);
                }}
              >
                {a.name}
                <p className="short-descriptiion">{a.shortDescription}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
