import styles from '@/styles/Home.module.css';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link className={`${styles.siteName} ${styles.link}`} href={"/main"}>
                CoachApp
            </Link>
            <Link className={styles.link} href={"/admin"}>
                Admin
            </Link>
            <Link className={styles.link} href={'/moncompte'}>
                Mon compte
            </Link>
            <Link className={styles.link} href={"/login"}>
                Login
            </Link>
        </nav>
    )
}