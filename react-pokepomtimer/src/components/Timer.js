/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip'

function Timer(){
  

  const [start, setstart] = useState(false)
  const [minutes, setminutes] = useState(10)
  const [seconds, setseconds] = useState(0)
 
  const timerMins = minutes < 10 ? `0${minutes}` : minutes
  const timerSecs = seconds < 10 ? `0${seconds}` : seconds

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval)
      if(start){
        if(seconds === 0){
          if(minutes !== 0){
            setseconds(59);
            setminutes(minutes - 1);
          }
          /* else{
            need to add some sort of break
          } */
        } 
        else{
          setseconds(seconds - 1)
        }
    }
    }, 1000);
    
  })


  const boolTimer = () =>{

    if(start === true){
      setstart(!start)
     
    }
    else{
      setstart(!start)
      
    }
    
  }

      return(
      <div className="timer-wrapper">
        <div><i class="fa fa-circle-o" aria-hidden="true"></i>
</div>
        <section className="timer">
        
          <p className="mins">{timerMins}</p>
          <p>:</p>
          <p className="secs">{timerSecs}</p>
          
        </section>
        <div className="icon-circle"><i className={`icon ${start ? 'fa fa-hourglass-start start' : 'fa fa-hourglass-end start' }`} aria-hidden="true" onClick={() => boolTimer()} data-tip data-for="hourglass"></i>
        <ReactTooltip id="hourglass" type="info">
          <p>H!</p>
          </ReactTooltip>
          </div>
        
        
      </div>
    )
  }


export default Timer