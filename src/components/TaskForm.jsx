import React from 'react'
import { useState } from 'react';

const TaskForm = ({tasks, setTasks}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        setTasks([...tasks, { id: (tasks.length - 1), text: text, date: day, reminder: reminder }])

        if (!text) {
          alert('Please add a task')
          return
        }
        
        setText('')
        setDay('')
        setReminder(false)
      }

    return (
        <form action="form" className='form' onSubmit={onSubmit}>
            <div className='form-input'>
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-input'>
                <label>Day & Time</label>
                <input type="datetime-local" id="birthdaytime" name="birthdaytime" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-input form-input-check'>
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.target.value)} />
            </div>

            <input type="submit" value='Save Task' className='submit-btn'/>
        </form>
    )
}

export default TaskForm