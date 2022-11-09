import React from "react";
import { MenuModal } from "../MenuModal/MenuModal";
import "./menuIcon.css";
import { Icon_Menu } from "../SvgIcons/MenuIconSvg/Icon_Menu/Icon_Menu";

export const MenuIcon = ({ menuIsOpen, setMenuOpen }) => {
  return (
    <div>
      <div
        className="menu-icon-container"
        onClick={() => {
          menuIsOpen ? setMenuOpen(false) : setMenuOpen(true);
        }}
      >
        <button className={menuIsOpen ? "visible-button" : ""}>
          <Icon_Menu />
        </button>
      </div>
      <MenuModal menuIsOpen={menuIsOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};
