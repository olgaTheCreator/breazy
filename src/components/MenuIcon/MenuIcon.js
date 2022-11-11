import React, { useState } from "react";
import { MenuModal } from "../MenuModal/MenuModal";
import "./menuIcon.css";
import { Icon_Menu } from "../SvgIcons/MenuIconSvg/Icon_Menu/Icon_Menu";

export const MenuIcon = ({ menuIsOpen, setMenuOpen }) => {
  const [ariaExpanded, setAriaExpanded] = useState("false");
  const [ariaPressed, setAriaPressed] = useState("false");
  return (
    <div>
      <div className="menu-icon-container">
        <button
          aria-expanded={ariaExpanded}
          aria-pressed={ariaPressed}
          tabIndex="0"
          aria-label="open and close information menu"
          className={menuIsOpen ? "visible-button" : ""}
          onClick={() => {
            menuIsOpen
              ? (setMenuOpen(false),
                setAriaExpanded("false"),
                setAriaPressed("false"))
              : (setMenuOpen(true),
                setAriaExpanded("true"),
                setAriaPressed("true"));
          }}
        >
          <Icon_Menu />
        </button>
      </div>
      <MenuModal menuIsOpen={menuIsOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};
