import Link from "next/link";
import styles from '@/styles/Home.module.css';
import React from 'react';

export default function Error403() {
    return (
        <>
            <div className={styles.errorContainer}>
                <p> Vous n'avez pas l'authorisation d'accéder à cette page.</p>
                <p> Voici un lien vers la page d'accueil du site.</p>
                <Link href={"main"}>Accueil</Link>
            </div>

        </>
    )
}