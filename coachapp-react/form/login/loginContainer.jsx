import React from "react";
import styles from '@/styles/Home.module.css'

export default function LoginFormContainer({ children }) {
    return (
        <div className={styles.loginFormContainer}>
            <div className={styles.formTitle}>Connexion</div>
            <div>{children}</div>
        </div>
    );
}