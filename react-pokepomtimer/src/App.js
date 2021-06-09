import React from "react";
import TaskList from "./components/TaskList.js";
import Timer from "./components/Timer.js";
function Main() {
  return (
    <React.Fragment>
      <Timer></Timer>
      <TaskList></TaskList>
    </React.Fragment>
  );
}

export default Main;
