'use client';
import { useState} from "react";
import styles from "./Login.module.css"
import Link from "next/link";

export default function LoginForm() {
    const [username, setUsernamel] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login:", username, password);
        // login logic here
    };


    return (
        <div>
            <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.username}>
                    <label htmlFor="username">Username:</label>
                    <input placeholder="Username" type="text" id="username" value={username} onChange={(e) => setUsernamel(e.target.value)} />
                </div>
                <div className={styles.password}>
                    <label htmlFor="password">Password:</label>
                    <input placeholder ="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Login</button>

            </form>

            <span>Don&apos;t have an account?</span>
            <Link href="/register">Register</Link>
        </div>
    )
}