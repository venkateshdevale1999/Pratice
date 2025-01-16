import React from 'react'

export const TaskCard = ({task,handleDelete}) => {
  return (
    <li  className={task.status ? "task-item completed" : "task-item notCompleted"}>
        <span className="task-name">{task.id} - {task.name}</span>
        <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
    </li>
  )
}
