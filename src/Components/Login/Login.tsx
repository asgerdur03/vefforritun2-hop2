'use client';
import { useEffect, useState} from "react";
import styles from "./Login.module.css"
import Link from "next/link";
import { TaskApi } from "@/api";
import { useAuth } from "@/context/AuthContext";

/*
* Login form, calls api and sets the token and the user to the context,
* if the login is successful, makes user available everywhere until logout
* Links to register page. 
*/
export default function LoginForm() {
    const [username, setUsernamel] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const {login} = useAuth();
    
    const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);
        console.log("Login:", username, password);
        try {
            const api = new TaskApi();
            const result =  await api.login(username, password);
            if (result) {
                if (result.token) {
                    console.log("token after login",result.token);
                    localStorage.setItem('token', result.token);
                    login(result.user, result.token);
                    setSuccess(true);
                } else {
                    setError('Login failed, no token returned');
                }
            }else
            {
                setError('Api returned null');
                console.log("Login failed");
            }

        } catch (error) {
            setError('Login failed');
            console.error('Error logging in:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            {loading && <p>Logging in...</p>}
            {success && <p style= {{color: "green"}}>Login successful</p>}
            {error && <p style= {{color: "red"}}>{error}</p>}

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