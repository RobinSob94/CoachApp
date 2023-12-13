import styles from '@/styles/Home.module.css';
import Link from "next/link";
import useNavbarLinkController from "@/controller/navbar/navbarLinkController";

export default function NavbarLink({lien, nomLien}) {
    const {
        actualPath
    } = useNavbarLinkController()

    return (
        <Link className={`${styles.link} ${actualPath === lien ? styles.linkIsActive : ""}`} href={lien}>{nomLien}</Link>
    )
}