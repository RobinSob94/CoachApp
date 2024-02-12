import React from 'react';
import styles from '@/styles/Home.module.css';
import NavbarLink from "@/components/UIComponents/navbarLink";
import React from "react";

export default function AdminNavbar() {
    return(
        <nav className={styles.adminNav}>
            <NavbarLink lien={"/admin/gestion"} nomLien={"Gestion"} />
        </nav>
    )
}