import React from 'react'
import Task from './Task'
import { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'Doctors Appointment',
      date: 'Feb 6, 2023 @ 7:30 pm',
      reminder: true
    },
    {
      id: 1,
      text: 'Job Interview',
      date: 'March 20, 2023 @ 9:15 pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Do Grocery',
      date: 'August 6, 2023 @ 12:00 pm',
      reminder: false
    }
  ])

  // // Add Tasks
  // const addTask = (task) => {
  //   console.log('Hi', task)
  // }
  // Remove Task
  const deleteTask = (id) => {
    console.log('Clicked')
    setTasks(tasks.filter((task) => task.id !== id))
  }

//   // Update Task Reminder
//   const updateTask = (id) => {console.log('Hi', id)
// }

  return (
    <div className='tasks'>
        {tasks.map((task)=> (<Task key={task.id} task={task} onDelete={deleteTask}/>))}
    </div>
  )
}

export default Tasks