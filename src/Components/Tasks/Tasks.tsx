'use client'

import React, { use } from "react";
import Task from "../Task/Task";
import styles from "./Tasks.module.css"
import { useState } from "react";
import { useEffect } from "react";
import { TaskApi } from "@/api";
import { Task as TaskType } from "@/types";
import { useAuth } from "@/context/AuthContext";
import TaskForm from "../TaskForm/TaskForm";
import { CreateTask } from "@/types";
import { Modal } from "@mui/material";


/**
 * Fetches and maps tasks from the correct user. 
 * Paginates 10 tasks at a time
 * Shows logged in user
 * TODO: Create new task
 * TODO: Remove mock delay and make mabey a spinner?
 */

export default function Tasks() {
    const {user, loading} = useAuth();
    const [loggedIn, setLoggedIn] = useState(false);

    const [tasks, setTasks] = useState<TaskType[]|null>(null);

    const [offset, setOffset] = useState(0);
    const [loadingTasks, setLoadingTasks] = useState(false);

    const [showForm, setShowForm] = useState(false);

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        const fetchTasks = async () => {
            console.log(offset);
            if (!user){
                setLoggedIn(false);
                return;
            }else {setLoggedIn(true);}
            
            
            if (!loading && user){
                try {

                    const api = new TaskApi();
                    setLoadingTasks(true);
                    await delay(1000);
                    const data=await api.getTasks(offset);
                    if (data) {
                        setTasks(data.tasks);
                    }
                } catch (error) {
                console.error('Error fetching tasks:', error);
                } finally {
                    setLoadingTasks(false);
                }
            }
            
        };
        fetchTasks();
        // if I add tasks, console goes crazy rerendering, if not, i need to reload when i delete task
    }, [loading, user, offset]);

    const handleSubmit = async (task: CreateTask) => {
        console.log(task);
        try {
            const api = new TaskApi();
            const response = await api.createTask(task);
            console.log("response", response);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }

    
    return (
        <div className={styles.container}>
            {loggedIn ? (<p>Logged in as {user?.username}</p>) : (<p>Not logged in</p>)}
            <h1>Tasks</h1>

            {loadingTasks ? (<p>Loading tasks...</p>) : (

            <div className={styles.taskContainer}>
                {tasks?.map((task) => (
                <Task 
                    key={task.id} 
                    id={task.id} 
                    title={task.title} 
                    description={task.description}
                    dueDate={task.dueDate}
                    categoryId={task.categoryId}
                    userId={task.userId}
                />
                ))}
                <button className={styles.taskButton} onClick={() => setShowForm(true)}>Create Task</button>
            </div>
            )}

            <Modal
                open={showForm}
                onClose={() => setShowForm(false)}
                disableEnforceFocus
            >
                <TaskForm onClose={() => setShowForm(false)} onSubmit={(task) => {setShowForm(false); handleSubmit(task);}}/>
            </Modal>


            <button onClick={() => setOffset(offset - 10)} disabled={offset == 0}>prev</button>
            <p>Page: {(offset/10)+1}</p>
            <button onClick={() => setOffset(offset + 10)} disabled={(tasks?.length ?? 0) < 10}>next</button>

        </div>
    )
}