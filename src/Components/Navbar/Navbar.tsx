'use client';
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathName = usePathname();
    return (
        
        <div>
            
            <nav className={styles.navbar}>

            <Link href="/" className={`${styles.link} ${pathName === '/' ? styles.active : ''}`}>
                Forsíða
            </Link>

            <Link href="/tasks" className={`${styles.link} ${pathName === '/tasks' ? styles.active : ''}`}>
                Tasks
            </Link>

            <Link href="login" className={`${styles.link} ${pathName === '/login' ? styles.active : ''}`}> Login</Link>
            </nav>

            
        </div>
    )
}