'use client'

import React, { use } from "react";
import Task from "../Task/Task";
import styles from "./Tasks.module.css"
import { useState } from "react";
import { useEffect } from "react";
import { TaskApi } from "@/api";
import { Task as TaskType } from "@/types";
import { useAuth } from "@/context/AuthContext";


export default function Tasks() {
    const {user, loading} = useAuth();
    const [loggedIn, setLoggedIn] = useState(false);

    const [tasks, setTasks] = useState<TaskType[]|null>(null);

    const [offset, setOffset] = useState(0);

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
                    const data=await api.getTasks(offset);
                    if (data) {
                        setTasks(data.tasks);
                    }
                } catch (error) {
                console.error('Error fetching tasks:', error);
                }
            }
            
        };
        fetchTasks();
    }, [loading, user, offset]);


    const handleCreateTask = () => {
        if (!user) return console.log('not logged in');

        console.log('create task');	
    }

    const nextPage = () => {
        setOffset(offset + 10);
        console.log(offset);
    }

    const prevPage = () => {
        setOffset(offset - 10);
    }
    
    return (
        <div className={styles.container}>
            {loggedIn ? (<p>Logged in as {user?.username}</p>) : (<p>Not logged in</p>)}


            <h1>Tasks</h1>

            <div className={styles.taskContainer}>
                {tasks?.map((task) => (
                <Task 
                    key={task.id} 
                    id={task.id} 
                    title={task.title} 
                    description={task.description}
                    dueDate={task.dueDate}
                    category={task.category}
                    userId={task.userId}
                />
                ))}
                <button className={styles.taskButton} onClick={handleCreateTask}>Create Task</button>
            </div>

            <button onClick={prevPage} disabled={offset == 0}>prev</button>
            <p>Page: {(offset/10)+1}</p>
            <button onClick={nextPage} disabled={(tasks?.length ?? 0) < 10}>next</button>

        </div>
    )
}