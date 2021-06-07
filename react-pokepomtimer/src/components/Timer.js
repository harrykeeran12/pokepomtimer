/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function Timer(){
  const [start, setstart] = useState(true)
  const [Time, setTime] = useState({mins: 10, secs: [0, 0]})
  
  const boolTimer = () =>{
    setstart(!start)
    if(start === true){
      return null
    }
    else{
      clearInterval(this.interval)
    }
  }

      return(
      <div className="timer-wrapper">
        <section className="timer">
          <p className="mins">{Time.mins}</p>
          <p>:</p>
          <p className="secs">{Time.secs[0]}</p>
          <p className="secs">{Time.secs[1]}</p>
        </section>
        <div className="icon-circle">
          <i className={`icon ${start ? 'fa fa-hourglass-start start' : 'fa fa-hourglass-end start' }`} aria-hidden="true" onClick={() => boolTimer()}></i>
        </div>
      </div>
    )
  }


export default Timer