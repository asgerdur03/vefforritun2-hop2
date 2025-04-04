import styles from './page.module.css'
import AdminActions from "@/Components/AdminActions/AdminActions";

export default function Admin() {
    return (
        <div className={styles.container}>
            <h1>Admin</h1>
            <AdminActions/>
        </div>
    )
}