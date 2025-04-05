import styles from "./Task.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {  Task as TaskType } from "@/types";
import { TaskApi } from "@/api";

/*  
* Task
* Handles delete, edit and looks (css)
* TODO: edit task
*/

type TaskProps = TaskType & { onTaskDelete: () => void };


export default function Task({ id, title, description, dueDate, categoryId, userId, onTaskDelete}: TaskProps) {
    // get tasks to refresh on delete (and edit?)
    console.log("categoryId and userId", categoryId, userId);

    const handleDeleteTask = async() => {
        try {
            const api = new TaskApi();
            const response = await api.deleteTask(id);
            console.log("response", response);
            alert(response?.message);
            onTaskDelete();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
        console.log('delete task', id);

    }

    const handleEditTask = () => {
        console.log('edit task', id);
    }


    return (
        <div className={styles.task}>
            <h1 className={styles.taskTitle}>{title}</h1>
            <p className={styles.taskDescription}>{description}</p>
            <p className={styles.taskDueDate}>{dueDate}</p>
            <div className={styles.taskActions}>
                <EditNoteIcon className={styles.editIcon} onClick={handleEditTask}/>
                <DeleteIcon className={styles.deleteIcon} onClick={handleDeleteTask}/>
            </div>

        </div>
    )
}
