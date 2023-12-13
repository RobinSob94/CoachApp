import styles from '@/styles/Home.module.css';
import Link from "next/link";
import useNavbarLinkController from "@/controller/navbar/navbarLinkController";

export default function NavbarLink({lien, nomLien}) {
    const {
        actualPath
    } = useNavbarLinkController()
    console.log('Actual paht is ' + actualPath)
    console.log('Lien is ' + lien)
    return (
        <Link className={`${styles.link} ${actualPath === lien ? styles.linkIsActive : ""}`} href={lien}>{nomLien}</Link>
    )
}