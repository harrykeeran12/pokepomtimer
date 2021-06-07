import React/* , {useState}  */from 'react';
import TaskList from './components/TaskList.js'
import Timer from './components/Timer.js'
/* import Form from './components/Form.js' */
function Main() {

  /* const [tasks, settasks] = useState([]); */
  return (
    <React.Fragment>
      <Timer></Timer>
      <TaskList>
      </TaskList>
      {/* <Form addTasks={addTasks}></Form> */}
      
    </React.Fragment>
  );
}

export default Main;
