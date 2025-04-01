import LoginForm from "@/Components/Login/Login";
import styles from "./page.module.css";


export default function Login() {
    return (
        <div className={styles.container}>
            <h1>Login Page</h1>
            <LoginForm />
        </div>
    )
}