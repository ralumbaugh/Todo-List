import React from 'react';
import './Task.css'

const Showtask = ({task, setTask}) =>{
    const deleteTask = (deleteitemidx) =>{
        let newTasks = [...task];
        newTasks.splice(deleteitemidx,1)
        setTask(newTasks);
    }

    const handleCheckbox = (modifyitem) =>{
        let newTasks = [...task];
        let modifiedTask = newTasks[modifyitem];
        modifiedTask.completed = !modifiedTask.completed;
        setTask(newTasks);
    }

    return(
        <div className="showtasks">
            {
                task.map((item, i) =>
                <div key = {i} className="individualtask">
                    {
                        item.completed === true?
                        <p className="completed">{item.content}</p>:
                        <p className="inprogress">{item.content}</p>
                    }
                    <input type="checkbox" checked={item.completed} onChange = {() => handleCheckbox(i)}></input>
                    <button onClick = {() => deleteTask(i)}>Delete</button>
                </div>
                )
            }
        </div>
    )
}

export default Showtask;