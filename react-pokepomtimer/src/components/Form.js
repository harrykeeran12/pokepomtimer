import React, { useState } from "react";
import "../index.css";

function Form({ addtotasks }) {
  const [task, settask] = useState(" ");

  /* function rewrite(){
  settaskgroup(task)
} */
  const handleInput = (event) => {
    settask(event.target.value);
    /* if (event.target.value !== "") {
    } */
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (task !== "") {
      addtotasks(task);
      settask("");
    }
  };

  return (
    <li className="task-wrapper form">
      <form className="task-input" id="task-input">
        <label for="add-task">add a task! : </label>
        <br />
        <input
          type="text"
          id="add-task"
          name="add-task"
          value={task}
          onChange={(e) => handleInput(e)}
        />
        <br />
        <input
          className="submit"
          type="submit"
          value="Add Task"
          onClick={submitHandler}
        />
      </form>
    </li>
  );
}

export default Form;
