import React, { useState } from "react";
import Task from "./Task.js";
import Form from "./Form.js";
import "../index.css";

function TaskList() {
  const [taskgroup, settaskgroup] = useState([]);

  
  function addtotasks(task) {
    const list = [...taskgroup];

    list.push(task);

    settaskgroup(list);
  }
  function deletefromtasks(task){
    const list = [...taskgroup];
    const elementnumber = list.findIndex(search => {
      return search = task
    })
    list.splice(elementnumber, 1);

    settaskgroup(list)
  }

  return (
    <React.Fragment>
      <ul className="tasks-list">
        <h2 className="tasks-title">tasks:</h2>
        {taskgroup.map((task, index) => (
          <Task value={task} key={index} deletefromtasks={(task) => deletefromtasks(task)}></Task>
        ))}
        <Form
          addtotasks={(task) =>
            /* {settaskgroup([...taskgroup, task])} */ addtotasks(task)
          }
        ></Form>
      </ul>
    </React.Fragment>
  );
}

export default TaskList;
