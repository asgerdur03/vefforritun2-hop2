'use client'

import React from "react";
import Task from "../Task/Task";
import styles from "./Tasks.module.css"

const mockTasks = [
    { id: 1, title: "Task 1", description: "Description 1", dueDate: "2023-06-01", category: "Category 1", tags: ["Tag 1", "Tag 2"] },
    { id: 2, title: "Task 2", description: "Description 2", dueDate: "2023-06-02", category: "Category 2", tags: ["Tag 3", "Tag 4"] },
    { id: 3, title: "Task 3", description: "Description 3", dueDate: "2023-06-03", category: "Category 3", tags: ["Tag 5", "Tag 6"] },
    { id: 4, title: "Task 4", description: "Description 4", dueDate: "2023-06-04", category: "Category 4", tags: ["Tag 7", "Tag 8"] },
];

export default function Tasks() {

    const handleCreateTask = () => {
        alert('create task');
    }
    
    return (
        <div className={styles.container}>
            <h1>Tasks</h1>

            <div className={styles.taskContainer}>
                {mockTasks.map((task) => (
                <Task 
                    key={task.id} 
                    id={task.id} 
                    title={task.title} 
                    description={task.description}
                    dueDate={task.dueDate}
                    category={task.category}
                    tags={task.tags}
                />
                ))}
                <button className={styles.taskButton} onClick={handleCreateTask}>Create Task</button>
            </div>
        </div>
    )
}