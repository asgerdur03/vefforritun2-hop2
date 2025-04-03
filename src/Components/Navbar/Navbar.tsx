'use client';
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { LogoutRounded } from "@mui/icons-material";
import { TaskApi } from "@/api";
import { useState } from "react";
import { useAuth} from "@/context/AuthContext";

export default function Navbar() {
    const {user, logout, loading} = useAuth();
    // todo: check if user is logged in, if logged in show logout, else show login

    const loggedIn = user !== null

    const pathName = usePathname();

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        
        <div>
            
            <nav className={styles.navbar}>

            <Link href="/" className={`${styles.link} ${pathName === '/' ? styles.active : ''}`}>
                Forsíða
            </Link>

            <Link href="/tasks" className={`${styles.link} ${pathName === '/tasks' ? styles.active : ''}`}>
                Tasks
            </Link>

            {loggedIn ? (
                <LogoutRounded onClick={logout}/>) : (<Link href="login" className={`${styles.link} ${pathName === '/login' ? styles.active : ''}`}> Login</Link>)
            }
            
        
            <p>{user?.username}</p>

            </nav>

            
        </div>
    )
}