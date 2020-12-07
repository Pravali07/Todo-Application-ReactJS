import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TodoListContext";
import Task from "./Todo";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length ? (
        <div><p className="no-tasks">Total Todos in the List : {tasks.length}</p>
        <ul className="list">
          {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </ul></div>
      ) : (
        <div className="no-tasks">No Todos Yet</div>
      )}
    </div>
  );
};

export default TaskList;