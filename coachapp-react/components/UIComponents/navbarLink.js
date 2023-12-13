import styles from '@/styles/Home.module.css';
import Link from "next/link";

export default function NavbarLink({lien, nomLien}) {
    return (
        <Link href={lien}>{nomLien}</Link>
    )
}