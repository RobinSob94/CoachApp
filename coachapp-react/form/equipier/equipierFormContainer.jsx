import React from "react";
import styles from '@/styles/Home.module.css'


export default function EquipierFormContainer({ children }) {
    return (
        <div className={styles.equipierFormContainer}>
            <div className={styles.formTitle}>Ajout d'un équipier</div>
            <div>{children}</div>
        </div>
    );
}