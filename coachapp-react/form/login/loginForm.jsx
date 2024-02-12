import styles from '@/styles/Home.module.css';
import React from "react";
import useLoginController from "@/controller/login/loginFormController";

export default function LoginForm() {
    const {
        setEmail,
        setPassword,
        errors,
        onSubmit
    } = useLoginController()

    return (
        <form onSubmit={e => onSubmit(e)} className={`${styles.card} ${styles.form}`}>
            <div className={styles.formComponent}>
                <label htmlFor={"email"}>Email</label>
                <input className={styles.formInput} onChange={e => setEmail(e.target.value)} id={"email"}
                       type={"text"}/>
                <span className="error">{errors["email"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"password"}>Mot de passe</label>
                <input className={styles.formInput} onChange={e => setPassword(e.target.value)} type={"password"}/>
                <span className="error">{errors["password"]}</span>
            </div>

            <input className={styles.formButton} type="submit" value="Connexion"/>
        </form>
    )
}