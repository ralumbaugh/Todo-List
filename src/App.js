import React, { useState } from 'react';
import './App.css';
import Newtask from './components/Newtask';
import Showtask from './components/Showtask';

function App() {
  const [task, setTask] = useState([])

  return (
    <div className="App">
      <Newtask task={task} setTask = {setTask} />
      <Showtask task = {task} setTask = {setTask} />
    </div>
  );
}

export default App;
