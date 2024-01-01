import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'Doctors Appointment',
      date: '2023-03-25 @ 7:30',
      reminder: true
    },
    {
      id: 1,
      text: 'Job Interview',
      date: '2023-05-02 @ 9:15',
      reminder: true
    },
    {
      id: 2,
      text: 'Do Grocery',
      date: '2023-07-13 @ 12:00',
      reminder: false
    }
  ])
  

  return (
    <div className="App fade-in">
      <Header tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
