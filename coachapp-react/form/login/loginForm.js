import styles from '@/styles/Home.module.css'
import {useState} from "react";
import useLoginController from "@/controller/login/loginFormController";

export default function LoginForm() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        errors,
        onSubmit
    } = useLoginController()

    return (
    <form onSubmit={e => onSubmit(e)} className={`${styles.card} ${styles.loginForm}`}>
        <div className={styles.formComponent}>
            <label htmlFor={"email"}>Email</label>
            <input value={email} className={styles.formInput} onChange={e => setEmail(e.target.value)} id={"email"} type={"text"} />
        </div>
        <div className={styles.formComponent}>
            <label htmlFor={"id"}>Mot de passe</label>
            <input value={password} className={styles.formInput} onChange={e =>setPassword(e.target.value)} type={"password"}/>
        </div>
        <input className={styles.formButton} type="submit" value="Connexion" />
    </form>
)
}