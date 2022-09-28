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
          <div className="modal-name">techniques</div>
          <div className="list-of-techniques">
            <ul>
              {breathingTechniques.map((a, index) => (
                <li
                  key={a.id}
                  onClick={() => {
                    handleStop();
                    setTechnique(breathingTechniques[index]);
                    setTechniquesOpen(false);
                    console.log(breathingTechniques[index]);
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
    </div>
  );
};
