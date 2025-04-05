import UserInfo from "@/Components/UserInfo/UserInfo"
import styles from "./page.module.css";
export default function UserPage() {
    return (
        <div className={styles.container}>
            <h1>User Page</h1>
            <UserInfo />
        </div>
    )
}