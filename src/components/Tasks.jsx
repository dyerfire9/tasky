import React from 'react'
import Task from './Task'

const Tasks = ({tasks, setTasks}) => {

  const deleteTask = (id) => {
    console.log('Clicked')
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Update Task Reminder
  const updateTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className='tasks'>
        {tasks.map((task)=> (<Task key={task.id} task={task} onDelete={deleteTask} onToggle={updateTask}/>))}
    </div>
  )
}

export default Tasks