'use client';
import { useActionState, useState} from "react";
import styles from "./Register.module.css"
import Link from "next/link";
import { TaskApi } from "@/api";
import { useAuth } from "@/context/AuthContext";

/*
* Register form, calls api and sets the token and the user to the context,
* if the register is successful, logs the user in, and makes user available everywhere until logout
* Links to login page.
* 
*/
export default function RegisterForm() {
    const [username, setUsernamel] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useAuth();

    const handleRegister = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Register:', username, password);
        try {
            const api = new TaskApi();
            const result = await api.register(username, password);
            if (result) {
                console.log(result);
                const response = await api.login(username, password);
                if (response) {
                    console.log(response.user);
                    localStorage.setItem('token', response.token);
                    login(response.user, response.token);
                }else
                {
                    console.log("Login failed");
                }
            } else {
                console.log("Registration failed");
            }

        } catch (error) {
            console.error('Error registering:', error);
        }
        // register logic here
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleRegister} >
                <div className={styles.username}>
                    <label htmlFor="username">Username:</label>
                    <input placeholder="Username" type="text" id="username" value={username} onChange={(e) => setUsernamel(e.target.value)} />
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