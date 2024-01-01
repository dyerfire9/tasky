import React from 'react'
import { useState } from 'react';

const TaskForm = ({tasks, setTasks}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (!text) {
          alert('Please add a task')
          return
        }
        if (!day){
            alert('Please add a date')
            return
        }

        const dateFormated = `${day.slice(0,10)} @ ${day.slice(11,16)}`
        console.log(dateFormated)
        setTasks([...tasks, { id: (tasks.length), text: text, date: dateFormated, reminder: reminder }])
        
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
                <input type="datetime-local" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-input form-input-check'>
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.value)} />
            </div>

            <input type="submit" value='Save Task' className='submit-btn'/>
        </form>
    )
}

export default TaskForm