'use client';
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { LogoutRounded } from "@mui/icons-material";
import { TaskApi } from "@/api";
import { useState } from "react";
import { useAuth} from "@/context/AuthContext";

/*
* Show losing if user is not logged in
* Else, shows logout, and username (replace with user icon)
* Username is a link to user page, where user can upload profiel picture (todo)
* 
*/
export default function Navbar() {

    const {user, logout, loading} = useAuth();

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

            <Link href="/user">{user?.username}</Link>
            

            </nav>

            
        </div>
    )
}