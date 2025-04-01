import styles from "./Task.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';


interface TaskProps {
    id: number,
    title: string
    description: string
    dueDate: string
    category: string
    tags: string[]
}


export default function Task({ id, title, description, dueDate, category, tags }: TaskProps) {
    // todo: get correct task type and attributes, implements the delete and edit

    const handleDeleteTask = () => {
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
            <p className={styles.taskCategory}>{category}</p>
            <p className={styles.taskTags}>{tags.join(', ')}</p>
            <div className={styles.taskActions}>
                <EditNoteIcon className={styles.editIcon} onClick={handleEditTask}/>
                <DeleteIcon className={styles.deleteIcon} onClick={handleDeleteTask}/>
            </div>

        </div>
    )
}
