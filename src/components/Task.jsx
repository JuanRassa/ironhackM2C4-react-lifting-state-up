// src/components/Task.jsx

function Task(props) {
  const {
    task: { _id, name, description, completed },
    handleTaskState,
  } = props;

  return (
    <div className='task-card'>
      <div className='task-card-half'>
        <h1>{name}</h1>
        {completed ? <span>DONE </span> : <span>PENDING ⌛</span>}

        <h2>Task Description</h2>
        <p>{description}</p>

        <button
          className='add'
          onClick={() => {
            handleTaskState(_id);
          }}>
          {completed ? <span>UNDO </span> : <span>✔️</span>}
        </button>
      </div>
    </div>
  );
}

export default Task;
