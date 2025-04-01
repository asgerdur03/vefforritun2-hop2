'use client';
import { useParams } from "next/navigation";
import styles from "./page.module.css";

export default function TasksByCategory() {
    const { category } = useParams();

    return (
        <div className={styles.container}>
            <h1>Tasks by category</h1>
            <p>category: {category}</p>
            
        </div>
    )
    
}