import React, { useRef, useState } from "react";

import "./menuModal.css";

export const MenuModal = () => {
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
    <div className="darkBG-menu ">
      <div className="menu-modal">
        <ul>
          <li>
            <div ref={ref1} onClick={() => handleScroll(ref1)}>
              <button
                onClick={() => {
                  open !== "about" ? setOPen("about") : setOPen("nothing");
                }}
              >
                About this app
              </button>
              {open === "about" && (
                <div>
                  {" "}
                  <p>
                    Your <strong>breath</strong> is a powerfull tool, that can
                    help you ease the stress, make you less anxious, give you
                    more energy for everyday life. A few straightforward
                    breathing exercises can make a big difference if you include
                    them in your regular routine. And the best thing?! It is
                    totally free. All you need is few minutes of your time. And
                    our app is an easy to use tool, that will help you set up
                    your routine.
                  </p>
                </div>
              )}
            </div>
            {/* <div ref={ref1} onClick={() => handleScroll(ref1)}>
              <Collapsible label="About this app"> */}

            {/* </Collapsible> */}
            {/* </div> */}
          </li>

          <li>
            <div ref={ref2} onClick={() => handleScroll(ref2)}>
              <button
                onClick={() => {
                  open !== "prepare" ? setOPen("prepare") : setOPen("nothing");
                }}
              >
                {console.log(ref2.current)}
                Get ready
              </button>
              {open === "prepare" && (
                <div>
                  <p>
                    You can do breathing exercises standing up, sitting in a
                    chair that supports your back, or lying on a bed or yoga mat
                    on the floor. Make yourself as comfortable as you can. If
                    you can, loosen any clothes that restrict your breathing. If
                    you are lying down, place your arms a little bit away from
                    your sides, with the palms up. Let your legs be straight, or
                    bend your knees so your feet are flat on the floor. If you
                    are sitting, place your arms on the chair arms. If you are
                    sitting or standing, place both feet flat on the ground.
                    Whatever position you are in, place your feet roughly
                    hip-width apart. Let your breath flow as deep down into your
                    belly as is comfortable, without forcing it. When you feel
                    ready, begin breathing session.
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div ref={ref3} onClick={() => handleScroll(ref3)}>
              <button
                onClick={() => {
                  open !== "disclaimer"
                    ? setOPen("disclaimer")
                    : setOPen("nothing");
                }}
              >
                Disclaimer
              </button>
              {open === "disclaimer" && (
                <div>
                  <p>
                    The exercise information provided here is of a general
                    nature and can not be substituted for the advice provided by
                    a medical doctor or certified health practitioner.
                    <br />
                    You should consult your GP or other relevant medical
                    practitioners are taking medication, you are pregnant, or if
                    you have any medical condition(s), especially asthma,
                    diabetes, epilepsy, obesity, or a heart condition.
                  </p>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
