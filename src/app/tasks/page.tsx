import Tasks from "@/Components/Tasks/Tasks";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Tasks/>
        </div>
    );
}
