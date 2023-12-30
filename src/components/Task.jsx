
import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
        <h3 className='task-title'>
            {task.text}
            <FaTimes className='task-delete' onClick={() => onDelete(task.id)}/>
        </h3>
        <h5 className='task-date'>{task.date}</h5>

    </div>
  )
}

export default Task