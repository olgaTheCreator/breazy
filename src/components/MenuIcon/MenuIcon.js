import React, { useRef, useState } from "react";
import { MenuModal } from "../MenuModal/MenuModal";
import "./menuIcon.css";
import { Icon_Info } from "../SvgIcons/InfoIconSvg/Icon_Menu/Icon_Info";
import FocusLock from "react-focus-lock";
import { AnimatePresence, motion } from "framer-motion";

export const MenuIcon = ({ menuIsOpen, setMenuOpen }) => {
  const [ariaExpanded, setAriaExpanded] = useState("false");
  const [ariaPressed, setAriaPressed] = useState("false");
  const infoRef = useRef(null);
  return (
    <div>
      <div className="menu-icon-container">
        <button
          data-testid="info_menu_button"
          ref={infoRef}
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
          <Icon_Info />
        </button>
      </div>

      <AnimatePresence>
        {menuIsOpen && (
          <FocusLock shards={[infoRef]}>
            <motion.div
              data-testid="wrapper_div_menuModal"
              key="menu_modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MenuModal menuIsOpen={menuIsOpen} setMenuOpen={setMenuOpen} />
            </motion.div>
          </FocusLock>
        )}
      </AnimatePresence>
    </div>
  );
};
