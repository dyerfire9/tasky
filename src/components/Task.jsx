
import React from 'react'
import {FaTimes, FaBell, FaBellSlash} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className='task'>
        <h3 className='task-title'>
            {task.text}
            <FaTimes className='task-delete' onClick={() => onDelete(task.id)}/>
            {task.reminder ? <FaBell className='task-bell' onDoubleClick={() => onToggle(task.id)}/> : <FaBellSlash className='task-bell' onDoubleClick={() => onToggle(task.id)}/>}
        </h3>
        <h5 className='task-date'>{task.date}</h5>

    </div>
  )
}

export default Task