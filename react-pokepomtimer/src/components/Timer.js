/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';


function Timer() {
  const [start, setstart] = useState(false);
  const [minutes, setminutes] = useState(10);
  const [seconds, setseconds] = useState(0);
  const [skip, setskip] = useState(false);

  const timerMins = minutes < 10 ? `0${minutes}` : minutes;
  const timerSecs = seconds < 10 ? `0${seconds}` : seconds;


  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (start) {
        if (seconds === 0) {
          if (minutes !== 0) {
            setseconds(59);
            setminutes(minutes - 1);
          } else {
            if (skip === false) {
              setstart(false);
              setminutes(5);
            } else {
              setstart(false);
              setminutes(10);
            }
          }
        } else {
          setseconds(seconds - 1);
        }
      }
    }, 1000);
  });

  const boolTimer = () => {
    if (start === true) {
      setstart(!start);
    } else {
      setstart(!start);
    }
  };

  
  const skipBreak = () => {
    if (skip === true) {

      setskip(!skip);
    } else {
      setskip(!skip);
    }
  };

  return (
    <div className="timer-wrapper">
      <section className="timer">
        <p className="mins">{timerMins}</p>
        <p>:</p>
        <p className="secs">{timerSecs}</p>
      </section>
      <div className="icon-grouping">
        <Tippy
          content={<p>Click to {start ? "pause" : "play"} the timer</p>}
          className="tooltip"
          delay="10"
          placement="top"
          
        >
          <i
            className={`icon ${
              start
                ? "fa fa-hourglass-start start"
                : "fa fa-hourglass-end start"
            }`}
            aria-hidden="true"
            onClick={() => boolTimer()}
            data-tip
            data-for="hourglass"
            tabindex="0"
          ></i>
        </Tippy>
        <Tippy
          content={
            skip ? (
              <p>Click to unskip the break.</p>
            ) : (
              <p>Click to skip the break.</p>
            )
          }
          className="tooltip"
        >
          <i
            class="fa fa-step-forward icon"
            aria-hidden="true"
            onClick={() => skipBreak()}
            data-tip
            data-for="skip-icon"
            tabindex="0"
          ></i>
        </Tippy>
      </div>

      {/* <ReactTooltip id="hourglass tooltip" type="info" effect="solid">
        
      </ReactTooltip>
      <ReactTooltip id="skip-icon tooltip" type="info" effect="solid">
          
        </ReactTooltip> 
        currently does not work*/}
    </div>
  );
}

export default Timer;
