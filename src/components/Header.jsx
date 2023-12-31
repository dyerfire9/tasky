import React from 'react'

<<<<<<< HEAD
const Header = () => {
  return (
    <div>
        Tasky
=======
const Header = (props) => {
  return (
    <div className='header'>
        <h2 className='title'>Tasky</h2>
        <button className='add-btn'>Add</button>
>>>>>>> 846ecab9dfac908ff560a857b91d2524b60d2512
    </div>
  )
}

export default Header