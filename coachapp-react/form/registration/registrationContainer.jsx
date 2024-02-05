import React from "react";
import styles from '@/styles/Home.module.css'

export default function RegistrationContainer({ children }) {
    return (
        <div className={styles.registrationFormContainer}>
            <div className={styles.formTitle}>Inscription</div>
            <div>{ children }</div>
        </div>
    )
}