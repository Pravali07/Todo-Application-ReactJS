import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TodoListContext'
import "./TodoForm.css"
import AOS from "aos"

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter a Todo Item"
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <div class="wrapper">
          <button className="buton btn add-task-btn "  data-aos="fade-right" type="submit">
            {editItem? 'Edit Task':'Add Task'}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className="buton btn clear-btn"data-aos="fade-left" onClick={clearList}>
            Clear
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {/* /* <button type="submit" className="btn btn-outline-danger add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button> */ }
        {/* <button className="btn btn-outline-secondary clear-btn"  onClick={clearList}>
          Clear
        </button> */}
      </div>
    </form>
  )
}
AOS.init({
  duration:1000 // values from 0 to 3000, with step 50ms
});
export default TaskForm