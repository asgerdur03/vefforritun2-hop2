'use client'

import styles from "./TaskForm.module.css"
import { useEffect, useState } from "react";
import { CreateTask, Category } from "@/types";
import { TaskApi } from "@/api";




interface TaskFormProps {
    onClose: () => void;
    onSubmit: (task: CreateTask) => void;
}

export default function TaskForm({onClose, onSubmit} : TaskFormProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');


    const [categories, setCategories] = useState<Category[]| null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const api = new TaskApi();
                const data = await api.getCategories();
                if (data) {
                    setCategories(data);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, []);


    return (
        <div className={styles.taskForm}>
            <h1>Task form</h1>

            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>

            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                <option value="">Select a category</option>
                {categories && categories.map((category) => <option key={category.id} value={category.id}>{category.title}</option>)}
            </select>
            
            <button onClick={onClose}>Close</button>
            <button onClick={() => onSubmit({title, description, categoryId, dueDate: ''})}>Submit</button>
    
        </div>
    )
}