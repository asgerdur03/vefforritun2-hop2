
import Link from "next/link";
import styles from "./Footer.module.css"

/*
* Footer with basic copyright
* Links to admin panel
*/
export default function Footer() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Task Taker | All rights reserved.

            <Link className={styles.link} href="/admin">Admin Panel</Link>

        </footer>
    )
}