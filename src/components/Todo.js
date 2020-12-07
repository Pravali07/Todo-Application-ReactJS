import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TodoListContext'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>{task.title} <hr/></span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)} title="Delete"
        >
          <i className="fas fa-trash-alt" style={{color:"rgb(202, 67, 67)"}}></i>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)} title="Edit">
          <i className="fas fa-pen" style={{color:"#5bc0de"}}></i>
        </button>
      </div>
    </li>
  )
}

export default Task