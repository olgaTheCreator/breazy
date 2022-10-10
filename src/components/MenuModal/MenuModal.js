import React, { useRef, useState } from "react";

import "./menuModal.css";

export const MenuModal = () => {
  const [open, setOPen] = useState({ about: false, prep: false });
  const ref1 = useRef();
  const ref2 = useRef();
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
                onClick={() =>
                  open.about
                    ? setOPen({ prep: false, about: false })
                    : setOPen({ prep: false, about: true })
                }
              >
                About this app
              </button>
              {open.about && (
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
                  open.prep
                    ? setOPen({ prep: false, about: false })
                    : setOPen({ prep: true, about: false });
                }}
              >
                {console.log(ref2.current)}
                Preparations
              </button>
              {open.prep && (
                <div>
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
          </li>
        </ul>
      </div>
    </div>
  );
};
