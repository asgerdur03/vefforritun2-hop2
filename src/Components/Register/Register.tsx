'use client';
import { useState} from "react";
import styles from "./Register.module.css"
import Link from "next/link";

export default function RegisterForm() {

    const [username, setUsernamel] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Register:', username, email, password);
        // register logic here
    }


    return (
        <div>
            <form className={styles.form} onSubmit={handleRegister}>
                <div className={styles.username}>
                    <label htmlFor="username">Username:</label>
                    <input placeholder="Username" type="text" id="username" value={username} onChange={(e) => setUsernamel(e.target.value)} />
                </div>
                <div className={styles.email}>
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.password}>
                    <label htmlFor="password">Password:</label>
                    <input placeholder ="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Register</button>

            </form>

            <span>Already have an account?</span>
            <Link href="/login">Login</Link>
        </div>
    )

}