import styles from "./page.module.css";
import RegisterForm from "@/Components/Register/Register";


export default function Login() {
    return (
        <div className={styles.container}>
            <h1>Login Page</h1>
            <RegisterForm />
        </div>
    )
}