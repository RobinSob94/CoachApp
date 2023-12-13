import styles from '@/styles/Home.module.css';
import Link from "next/link";
import Navbar from "@/components/UIComponents/navbar";

export default function AdminNavbar() {
    return(
        <nav className={styles.adminNav}>
            <Link className={styles.link} href={"/admin/gestion"}>Gestion</Link>
            <Link className={styles.link} href={"/login"}>TempLogin</Link>
            <Link className={styles.link} href={"/login"}>TempLogin</Link>
            <Link className={styles.link} href={"/login"}>TempLogin</Link>
        </nav>
    )
}