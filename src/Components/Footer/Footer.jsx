
import Link from "next/link";
import styles from "./Footer.module.css"


export default function Footer() {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()} Task Taker | All rights reserved.

            <Link href="/admin">Admin Panel</Link>

        </footer>
    )
}