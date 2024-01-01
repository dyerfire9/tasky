import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react';

function App() {
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
  

  return (
    <div className="App">
      <Header tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
