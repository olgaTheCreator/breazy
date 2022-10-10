import React from "react";
import { MenuModal } from "../MenuModal/MenuModal";
import "./menuIcon.css";

export const MenuIcon = ({ menuIsOpen, setMenuOpen }) => {
  return (
    <div>
      <div
        className="menu-icon-container"
        onClick={() => {
          menuIsOpen ? setMenuOpen(false) : setMenuOpen(true);
        }}
      >
        <button className={menuIsOpen ? "visible-button" : ""}></button>
      </div>
      {menuIsOpen && <MenuModal setMenuOpen={setMenuOpen} />}
    </div>
  );
};
