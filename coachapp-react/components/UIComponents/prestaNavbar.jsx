import NavbarLink from "@/components/UIComponents/navbarLink";
import styles from '@/styles/Home.module.css';
import React from "react";

export default function PrestaNavbar() {
    return (
        <nav className={styles.adminNav}>
            <NavbarLink lien={"/maGestion/gestion"} nomLien={"Gestion"} />
        </nav>
    )
}