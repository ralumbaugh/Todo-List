import React, { useState } from 'react';
import './Task.css'

const Showtask = props =>{
    const {task, setTask} = props;

    const deleteTask = (e, deleteitem) =>{
        let newTasks = task.filter(mytask => mytask.content != deleteitem.content)
        setTask(newTasks);
    }

    const handleCheckbox = (e, modifyitem) =>{
        let newTasks = [];
        let modifiedTask = modifyitem;
        if(modifiedTask.completed === true){
            modifiedTask.completed = false;
        }
        else{
            modifiedTask.completed = true;
        }
        task.map(item =>{
            if(item !== modifyitem){
                newTasks.push(item);
            }
            else{
                newTasks.push(modifiedTask);
            }
        })
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
                    <input type="checkbox" checked={item.completed} onChange = {(e) => handleCheckbox(e, item)}></input>
                    <button onClick = {(e) => deleteTask( e, item)}>Delete</button>
                </div>
                )
            }
        </div>
    )
}

export default Showtask;