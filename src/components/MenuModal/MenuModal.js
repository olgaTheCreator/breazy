import React, { useRef, useState } from "react";
import "./menuModal.css";
import { Icon_Small } from "../SvgIcons/SmallIconSvg/Icon_Small/Icon_Small";
import { motion, AnimatePresence } from "framer-motion";

export const MenuModal = ({ menuIsOpen }) => {
  const [open, setOPen] = useState("nothing");
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const handleScroll = (a) => {
    a.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <AnimatePresence>
      {menuIsOpen && (
        <motion.div
          key="menu_modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // transition={{ duration: 0.6 }}
        >
          <div className="darkBG-menu ">
            <div className="menu-modal">
              <ul>
                <li>
                  <div
                    ref={ref1}
                    onClick={() => handleScroll(ref1)}
                    className="menu_item"
                    data-state={open === "about" ? "about" : ""}
                  >
                    <Icon_Small />
                    <button
                      onClick={() => {
                        open !== "about"
                          ? setOPen("about")
                          : setOPen("nothing");
                      }}
                    >
                      <span>About this app</span>
                    </button>
                    {/* <AnimatePresence> */}
                    {open === "about" && (
                      // <motion.div
                      //   className="collapsable"
                      //   key="about"
                      //   initial={{ scaleY: 0 }}
                      //   animate={{ scaleY: 1 }}
                      //   exit={{ scaleY: 0 }}
                      // >
                      <div className="collapsable">
                        {" "}
                        <p>
                          Your <strong>breath</strong> is a powerfull tool, that
                          can help you ease the stress, make you less anxious,
                          give you more energy for everyday life. A few
                          straightforward breathing exercises can make a big
                          difference if you include them in your regular
                          routine.
                        </p>
                        <p>
                          {" "}
                          And the best thing?! It is totally free. All you need
                          is few minutes of your time. And our app is an easy to
                          use tool, that will help you set up your routine.
                        </p>
                      </div>
                      // </motion.div>
                    )}
                    {/* </AnimatePresence> */}
                  </div>
                  {/* <div ref={ref1} onClick={() => handleScroll(ref1)}>
              <Collapsible label="About this app"> */}

                  {/* </Collapsible> */}
                  {/* </div> */}
                </li>

                <li>
                  <div
                    ref={ref2}
                    onClick={() => handleScroll(ref2)}
                    className="menu_item"
                    data-state={open === "prepare" ? "prepare" : ""}
                  >
                    <Icon_Small />
                    <button
                      onClick={() => {
                        open !== "prepare"
                          ? setOPen("prepare")
                          : setOPen("nothing");
                      }}
                    >
                      {console.log(ref2.current)}
                      <span>Get ready</span>
                    </button>
                    {open === "prepare" && (
                      <div className="collapsable">
                        <p>
                          You can do breathing exercises standing up, sitting in
                          a chair that supports your back, or lying on a bed or
                          yoga mat on the floor. Make yourself as comfortable as
                          you can. If you can, loosen any clothes that restrict
                          your breathing.
                        </p>
                        {/* <p>
                    {" "}
                    If you are lying down, place your arms a little bit away
                    from your sides, with the palms up. Let your legs be
                    straight, or bend your knees so your feet are flat on the
                    floor. If you are sitting, place your arms on the chair
                    arms. If you are sitting or standing, place both feet flat
                    on the ground. Whatever position you are in, place your feet
                    roughly hip-width apart.
                  </p> */}
                        <p>
                          {" "}
                          Let your breath flow as deep down into your belly as
                          is comfortable, without forcing it. When you feel
                          ready, begin breathing session.
                        </p>
                      </div>
                    )}
                  </div>
                </li>
                <li>
                  <div
                    ref={ref3}
                    onClick={() => handleScroll(ref3)}
                    className="menu_item"
                    data-state={open === "disclaimer" ? "disclaimer" : ""}
                  >
                    <Icon_Small />
                    <button
                      onClick={() => {
                        open !== "disclaimer"
                          ? setOPen("disclaimer")
                          : setOPen("nothing");
                      }}
                    >
                      <span>Disclaimer</span>
                    </button>
                    {open === "disclaimer" && (
                      <div>
                        <p>
                          The exercise information provided here is of a general
                          nature and can not be substituted for the advice
                          provided by a medical doctor or certified health
                          practitioner.
                        </p>
                        <p>
                          You should consult your GP or other relevant medical
                          practitioners are taking medication, you are pregnant,
                          or if you have any medical condition(s), especially
                          asthma, diabetes, epilepsy, obesity, or a heart
                          condition.
                        </p>
                      </div>
                    )}{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>{" "}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
