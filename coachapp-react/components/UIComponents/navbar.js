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

/* TODO: Faire passer ce composant en MVVC en mettant un json avec les entrées de routes et lier ce JSON à ce fichier
        puis boucler avec un .map sur le JSON afin d'en extraire et de créer chaque lien individyellement à l'aide
        du composant Link de next.
*/