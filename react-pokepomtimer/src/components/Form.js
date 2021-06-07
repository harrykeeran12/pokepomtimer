import React , { useState } from 'react';
import '../index.css'

function Form({ settaskgroup }){
const [task, settask] = useState('testing')

/* function rewrite(){
  settaskgroup(task)
} */
const handleInput = event => {
  event.preventDefault()
  settask(event.target.value);  
  };


  return(
    <li className="task-wrapper form" >
    <form className="task-input" id="task-input" >
      <label for="add-task">Add a task! : </label><br />
      <input type="text" id="add-task" name="add-task" onChange={handleInput} /><br />
      <input
        className="submit"
        type="submit"
        value="Add Task"
        onClick={() => settaskgroup(task)}
      />
     </form>
     </li>
  )
}

export default Form