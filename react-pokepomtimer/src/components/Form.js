import React, {useState} from 'react';
import '../index.css'

function Form({ addtotasks }){
const [task, settask] = useState(' ')

/* function rewrite(){
  settaskgroup(task)
} */
const handleInput = event => {
  if (event.target.value !== ''){
  console.log(event.target.value)
  settask(event.target.value)
  
 }
  };
const submitHandler = event => {
  event.preventDefault()
  addtotasks(task); 
}


  return(
    <li className="task-wrapper form" >
    <form className="task-input" id="task-input" >
      <label for="add-task">Add a task! : </label><br />
      <input type="text" id="add-task" name="add-task" onChange={handleInput} /><br />
      <input
        className="submit"
        type="submit"
        value="Add Task"
        onClick={submitHandler}
      />
     </form>
     </li>
  )
}

export default Form