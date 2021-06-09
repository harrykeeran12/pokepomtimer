import React, { useState } from "react";
import "../index.css";

function Task(props) {
  const [done, setdone] = useState(false);

  const completeTask = () => {
    setdone(!done);
    console.log(done);
  };
  return (
    <li className="task-wrapper">
      <span className="dot" onClick={() => completeTask()}></span>
      <p className={`task ${done ? "crossout" : ""}`}>{props.value}</p>
    </li>
  );
}

/* class Task extends React.Component{
  
 
  render(){    
    return(
    <li className="task-wrapper">
      <span className="dot" ></span>
      <p className="task">{this.props.value}</p>
    </li> );
  };
} */
//do the onclick thing later

export default Task;
