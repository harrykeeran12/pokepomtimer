/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

function Timer() {
  const [start, setstart] = useState(false);
  const [minutes, setminutes] = useState(10);
  const [seconds, setseconds] = useState(0);
  const [skip, setskip] = useState(false);

  const timerMins = minutes < 10 ? `0${minutes}` : minutes;
  const timerSecs = seconds < 10 ? `0${seconds}` : seconds;
  let skipMessage = "";
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
              setminutes(5);
            } else {
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
      let skipMessage = "Break has been skipped";
      console.log(skipMessage);
      setskip(!skip);
    } else {
      console.log(skipMessage);
      setskip(!skip);
    }
  };

  return (
    <div className="timer-wrapper">
      <div>
        <i class="fa fa-circle-o" aria-hidden="true"></i>
      </div>
      <section className="timer">
        <p className="mins">{timerMins}</p>
        <p>:</p>
        <p className="secs">{timerSecs}</p>
      </section>
      <div className="icon-grouping">
        <i
          className={`icon ${
            start ? "fa fa-hourglass-start start" : "fa fa-hourglass-end start"
          }`}
          aria-hidden="true"
          onClick={() => boolTimer()}
          data-tip
          data-for="hourglass"
        ></i>
        <i
          class="fa fa-step-forward icon"
          aria-hidden="true"
          onClick={() => skipBreak()}
          data-tip
          data-for="skip-icon"
        ></i>
      </div>

      <ReactTooltip id="hourglass tooltip" type="info" effect="solid">
        <p>Click to {start ? "pause" : "play"} the timer</p>
      </ReactTooltip>
      {skip ? (
        <ReactTooltip id="skip-icon tooltip" type="info" effect="solid">
          <p>Click to unskip the break.</p>
        </ReactTooltip>
      ) : (
        <ReactTooltip id="skip-icon tooltip" type="info" effect="solid">
          <p>Click to skip the break.</p>
        </ReactTooltip>
      )}
    </div>
  );
}

export default Timer;
