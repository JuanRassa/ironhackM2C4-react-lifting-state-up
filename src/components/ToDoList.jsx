// src/components/ToDoList.jsx

import { useState } from 'react';
import Task from './Task';
import Summary from './Summary';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    completed: false,
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    completed: false,
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    completed: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const toggleTaskState = taskId => {
    const tasksCopy = [...tasks];
    tasksCopy.forEach(task => {
      if (task._id === taskId) {
        task.completed = !task.completed;
        task.completed ? setTasksCompleted(prev => prev + 1) : setTasksCompleted(prev => prev - 1);
      }
    });
    setTasks(tasksCopy);
  };
  console.log(tasks);
  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />

      <div className='todo-container'>
        {tasks.map(task => (
          <Task key={task._id} task={task} handleTaskState={toggleTaskState} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
