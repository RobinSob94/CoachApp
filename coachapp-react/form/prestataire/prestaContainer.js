import React from "react";
import styles from '@/styles/Home.module.css'

export default function PrestaContainter({children}) {
    return (
        <div className={styles.prestaContainer}>
            <div className={styles.formTitle}>Prestataire</div>
            <div>{ children }</div>
        </div>
    )
}