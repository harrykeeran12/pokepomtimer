import React, { useState } from 'react';

function Timer(){
  const [start, setstart] = useState(false)
  const startTimer = () =>{
    setstart(!start)
  }
    return(
      <div className="timer-wrapper">
        <section className="timer">
          <p className="mins">10</p>
          <p>:</p>
          <p className="secs">00</p>
        </section>
        <div className="icon-circle">
          <i className={`icon ${start ? 'fa fa-hourglass-start start' : 'fa fa-hourglass-end start' }`} aria-hidden="true" onClick={() => startTimer()}></i>
        </div>
      </div>
    )
  }


export default Timer