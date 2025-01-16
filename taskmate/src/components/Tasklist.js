import { useState } from "react";
import "./Tasklist.css"
import { TaskCard } from "./TaskCard";

export const Tasklist = (props) => {

    const [isDisplay, setIsDisplay] = useState(false);
    const [tasks, setTasks] = useState([
        {id : 1, name: "record lectures", status: true},
        {id : 2, name: "upload lectures", status: false},
        {id : 3, name: "take lectures", status: false}
    ]);

    function handleDelete(id){
        setTasks(tasks.filter((task) => id !== task.id));
    }

    function handleDisplayTaskList(){
        setIsDisplay(!isDisplay);
    }

    function minimizeTaskList(){
        setIsDisplay(false);
    }

    return (
        <>
        <button className="display-btn" onClick={handleDisplayTaskList}>DISPLAY TASK LIST</button>
        {props.item}
        {isDisplay && (
            <div className="tasklist-container">
                <span>
                    <h1 className="tasklist-title">TASK LIST</h1>
                    <button className="collapse-btn" onClick={minimizeTaskList}>Collapse</button>
                </span>
                <ul className="tasklist">
                    {tasks.map((task, index) => (
                        <TaskCard key={index} task={task} handleDelete = {handleDelete}/>
                    ))}
                </ul>
            </div>
        )}
        </>
    );
}
