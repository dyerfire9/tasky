import React from 'react'
import { useState } from 'react';
import TaskForm from './TaskForm'

const Header = ({tasks, setTasks}) => {
  const [btnText, setBtnText] = useState('Add')
  const [toggleForm, setToggleForm] = useState(false)

  const changeBtn = () => {
    setBtnText(btnText === 'Add'? 'Close' : 'Add')
    setToggleForm(!toggleForm)
  }

  return (
    <>
    <div className='header'>
        <h2 className='title'>Tasky</h2>
        {btnText === 'Add' ? <button className='add-btn' onClick={changeBtn}>Add</button> : <button className='add-btn' onClick={changeBtn}>Close</button>}
    </div>
     {toggleForm && <TaskForm tasks={tasks} setTasks={setTasks}/>}
    </>

  )
}

export default Header