import React, { useState } from 'react';

const Newtask = ({task, setTask}) => {
    const [newTask, setNewTask] = useState("");
    const [newTaskError, setNewTaskError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newTask.length <= 0){
            setNewTaskError("Please input a task");
        }
        else{
            setTask([...task, {content: newTask, completed: false}]);
            setNewTask("");
            setNewTaskError("");
        }
    }

    const handleNewTask = (e) =>{
        setNewTask(e.target.value);
    }

    const saveForLater = (e) =>{
        e.preventDefault();
        console.log(task);
        document.cookie = "alltasks=" + JSON.stringify(task);
    }

    const loadCookies = (e) =>{
        e.preventDefault();
        const allcookies = document.cookie;
        const cookiearray = allcookies.split('alltasks=');
        const mycookie = cookiearray[1]
        setTask(JSON.parse(mycookie))
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>New Task: </label>
                    <input type="text" value={newTask} onChange={handleNewTask}></input>
                    <button>Add New Task</button>
                </div>
                <p>{newTaskError}</p>
            </form>
            <button onClick={saveForLater}>Save for Later</button>
            <button onClick={loadCookies}>Reload List</button>
        </div>
    )
}

export default Newtask;