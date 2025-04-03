'use client';
import { useEffect, useState} from "react";
import styles from "./Login.module.css"
import Link from "next/link";
import { TaskApi } from "@/api";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
    const [username, setUsernamel] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useAuth();
    



    const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login:", username, password);
        try {
            const api = new TaskApi();
            const result =  await api.login(username, password);
            if (result) {
                console.log(result.user);
                localStorage.setItem('token', result.token);
                login(result.user, result.token);
            }else
            {
                console.log("Login failed");
            }

        } catch (error) {
            console.error('Error logging in:', error);
        }
    }



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