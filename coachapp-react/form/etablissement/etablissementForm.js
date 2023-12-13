import styles from '@/styles/Home.module.css'
import {useState} from "react";

export default function LoginForm() {

    return (
        <form onSubmit={e => onSubmit(e)} className={`${styles.card} ${styles.loginForm}`}>
            <div className={styles.formComponent}>
                <label htmlFor={"nomEtablissement"}>Email</label>
                <input className={styles.formInput} onChange={e => setNomEtablissement(e.target.value)} id={"nomEtablissement"} type={"text"}/>
                <span className="error">{errors["nomEtablissement"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"adresseEtablissement"}>Adresse</label>
                <input id={"adresseEtablissement"} className={styles.formInput} onChange={e => setAdresse(e.target.value)} type={"text"}/>
                <span className="error">{errors["adresseEtablissement"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"heureOuverture"}>Heure d'ouverture</label>
                <input id={"heureOuverture"} type={"date"} min={""} max={""} className={styles.formInput} onChange={e => setOuverture(e.target.value)}/>
                <span className={styles.error}>{errors["heureOuverture"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"heureFermeture"}>Heure de fermeture</label>
                <input id={"heureFermeture"} type={"date"} min={""} max={""} className={styles.formInput} onChange={e => setFermeture(e.target.value)}/>
                <span className={styles.error}>{errors["heureFermeture"]}</span>
            </div>
            <input className={styles.formButton} type="submit" value="Valider"/>
        </form>
    )
}