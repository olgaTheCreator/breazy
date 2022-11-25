import React, { useState } from "react";
import "./menuModal.css";
import { Icon_Small } from "../SvgIcons/SmallIconSvg/Icon_Small/Icon_Small";

export const MenuModal = () => {
  const [open, setOPen] = useState("nothing");
  const [ariaExpanded, setAriaExpanded] = useState("false");
  const aria_hidden = "true";

  return (
    <div className="darkBG-menu ">
      <div className="menu-modal">
        <ul>
          <li>
            <div
              className="menu_item"
              data-state={open === "about" ? "about" : ""}
            >
              <button
                aria-expanded={ariaExpanded}
                aria-labelledby="about"
                onClick={() => {
                  open !== "about"
                    ? (setOPen("about"), setAriaExpanded("true"))
                    : (setOPen("nothing"), setAriaExpanded("false"));
                }}
              >
                <Icon_Small aria_hidden={aria_hidden} />
                <span id="about">About this app</span>
              </button>
              {open === "about" && (
                <div className="collapsable">
                  {" "}
                  <p>
                    Your <strong>breath</strong> is a powerfull tool, that can
                    help you ease the stress, make you less anxious, give you
                    more energy for everyday life. A few straightforward
                    breathing exercises can make a big difference if you include
                    them in your regular routine.
                  </p>
                  <p>
                    {" "}
                    And the best thing?! It is totally free. All you need is few
                    minutes of your time. And our app is an easy to use tool,
                    that will help you set up your routine.
                  </p>
                </div>
              )}
            </div>
          </li>

          <li>
            <div
              className="menu_item"
              data-state={open === "prepare" ? "prepare" : ""}
            >
              <button
                aria-expanded={ariaExpanded}
                aria-labelledby="get_ready"
                onClick={() => {
                  open !== "prepare"
                    ? (setOPen("prepare"), setAriaExpanded("true"))
                    : (setOPen("nothing"), setAriaExpanded("false"));
                }}
              >
                <Icon_Small aria_hidden={aria_hidden} />
                <span id="get_ready">Get ready</span>
              </button>
              {open === "prepare" && (
                <div className="collapsable">
                  <p>
                    You can do breathing exercises standing up, sitting in a
                    chair that supports your back, or lying on a bed or yoga mat
                    on the floor. Make yourself as comfortable as you can. If
                    you can, loosen any clothes that restrict your breathing.
                  </p>
                  <p>
                    {" "}
                    Let your breath flow as deep down into your belly as is
                    comfortable, without forcing it. When you feel ready, begin
                    breathing session.
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div
              className="menu_item"
              data-state={open === "disclaimer" ? "disclaimer" : ""}
            >
              <button
                aria-expanded={ariaExpanded}
                aria-labelledby="disclaimer"
                onClick={() => {
                  open !== "disclaimer"
                    ? (setOPen("disclaimer"), setAriaExpanded("true"))
                    : (setOPen("nothing"), setAriaExpanded("false"));
                }}
              >
                <Icon_Small aria_hidden={aria_hidden} />
                <span id="disclaimer">Disclaimer</span>
              </button>
              {open === "disclaimer" && (
                <div>
                  <p>
                    The exercise information provided here is of a general
                    nature and can not be substituted for the advice provided by
                    a medical doctor or certified health practitioner.
                  </p>
                  <p>
                    You should consult your GP or other relevant medical
                    practitioners are taking medication, you are pregnant, or if
                    you have any medical condition(s), especially asthma,
                    diabetes, epilepsy, obesity, or a heart condition.
                  </p>
                </div>
              )}{" "}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
