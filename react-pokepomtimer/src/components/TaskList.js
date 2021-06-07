import React from 'react';
import Task from './Task.js'
import '../index.css'
class TaskList extends React.Component{
  render(){
    return(
      <React.Fragment>
      <h2 className="tasks-title">tasks:</h2>
      <ul className="tasks-list">
        <Task value="This is a task that you need to complete urgently."></Task>
        <Task value="Do this please!"></Task>
        <Task value="Do that."></Task>
      </ul>
      </React.Fragment>
    )
  }
}

export default TaskList