import React, { useState } from 'react';
import Task from './Task.js';
import Form from './Form.js'
import '../index.css';

function TaskList() {
  const [taskgroup, settaskgroup] = useState(["The art of war", "Is a fun thing.", "Innit."
])
    return(

      <React.Fragment>
      <h2 className="tasks-title">tasks:</h2>
      <ul className="tasks-list">
        {
          taskgroup.map((task, index) => (
            <Task value={task} key={index}></Task>
          ))
        }
        <Form settaskgroup = {task => {settaskgroup([...taskgroup, task])} }></Form>
      </ul>
      </React.Fragment>
    )
}

export default TaskList