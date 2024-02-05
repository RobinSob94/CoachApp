import React from "react";
import styles from '@/styles/Home.module.css'

export default function EtablissementContainer({ children }) {
    return (
        <div className={styles.etablissementFormContainer}>
            <div className={styles.formTitle}>Créer un établissement</div>
            <div>{children}</div>
        </div>
    );
}