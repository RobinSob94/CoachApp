import React from "react";
import styles from '@/styles/Home.module.css'

export default function ServiceContainer({ children }) {
    return (
        <div className={styles.etablissementFormContainer}>
            <div className={styles.formTitle}>Créer un service</div>
            <div>{children}</div>
        </div>
    );
}