import React, { useState } from 'react';

const Newtask = props => {
    const {task, setTask} = props;
    const [newTask, setNewTask] = useState("");
    const [newTaskError, setNewTaskError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        let allTasks = []
        task.map(content =>{
            if(allTasks.includes(content.content) === false){
                allTasks.push(content.content)
            }
        })

        if(newTask.length <= 0){
            setNewTaskError("Please input a task");
        }

        else if(allTasks.includes(newTask) === true){
            setNewTaskError("This task is already listed. Please input a new task");
        }

        else{
            let submitTask = [...task, {content: newTask, completed: false}];
            setTask(submitTask);
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

    // const loadCookies = (e) =>{
    //     e.preventDefault();
    //     const allcookies = document.cookie;
    //     const cookiearray = allcookies.split('alltasks=');
    //     const mycookie = cookiearray[1]
    //     console.log(mycookie)
    //     // If I copy and paste the results of my console.log(mycookie) into the set task function below, I can get it to load properly. However, if I just leave it as a mycookie variable, I get an error saying that task.map is not a function.
    //     // setTask(mycookie)
    // }

    // const seeTask = (e) =>{
    //     e.preventDefault();
    //     console.log(task)
    // }

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
            {/* <button onClick={saveForLater}>Save for Later</button>
            <button onClick={loadCookies}>Reload List</button> */}
            {/* <button onClick={seeTask}>Console Log</button> */}
        </div>
    )
}

export default Newtask;