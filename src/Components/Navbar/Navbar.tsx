'use client';
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { LogoutRounded } from "@mui/icons-material";
import { useAuth} from "@/context/AuthContext";
import Image from "next/image";

/*
* Show losing if user is not logged in
* Else, shows logout, and username (replace with user icon)
* Username is a link to user page, where user can upload profiel picture (todo)
* 
*/
export default function Navbar() {

    const {user, logout, loading} = useAuth();


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

            {user ? (
            <>
                <Link href="/user" >
                    <Image className={styles.userImage} src={user.imageUrl ?? "https://res.cloudinary.com/dafrwbefp/image/upload/v1743813795/uploads/e6i2hf3unibh3vterwex.png"} alt="user" width={50} height={50}/>
                </Link>
                <LogoutRounded  className={styles.logout} onClick={logout}/>
            </>
            ) : (<Link href="login" className={`${styles.link} ${pathName === '/login' ? styles.active : ''}`}> Login</Link>)
            }

            </nav>

            
        </div>
    )
}