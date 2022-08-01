import React from "react";
import "./menuModalStyle.css";

export const MenuModal = ({ setMenuOpen }) => {
  return (
    <div className="darkBG-menu ">
      <div className="centered-menu">
        <div className="menu-modal">
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
