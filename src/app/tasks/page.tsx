import Tasks from "@/Components/Tasks/Tasks";
import styles from "./page.module.css";
import Categories from "@/Components/Categories/Categories";

export default function Home() {
    return (
        <div className={styles.container}>
            <Categories/>
            <Tasks/>
        </div>
    );
}
