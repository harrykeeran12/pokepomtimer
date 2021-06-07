import React from 'react';

class Timer extends React.Component{
  render(){
    return(
      <div className="timer-wrapper">
        <section className="timer">
          <p className="mins">10</p>
          <p>:</p>
          <p className="secs">00</p>
        </section>
        <div className="icon-circle">
          <i className="fa fa-hourglass-start start" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

export default Timer