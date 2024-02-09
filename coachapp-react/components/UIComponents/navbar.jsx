import styles from '@/styles/Home.module.css';
import NavbarLink from "@/components/UIComponents/navbarLink";
import React from "react";
export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <NavbarLink lien={"/main"} nomLien={"CoachApp"} />
            <NavbarLink lien={"/admin"} nomLien={"Administrateur"} />
            <NavbarLink lien={"/moncompte"} nomLien={"Mon compte"} />
            <NavbarLink lien={"/prestataire"} nomLien={"Prestataire"} />
            <NavbarLink lien={"/reservation"} nomLien={"Réserver"} />
        </nav>
    )
}

/* TODO: Faire passer ce composant en MVVC en mettant un json avec les entrées de routes et lier ce JSON à ce fichier
        puis boucler avec un .map sur le JSON afin d'en extraire et de créer chaque lien individyellement à l'aide
        du composant Link de next.
*/