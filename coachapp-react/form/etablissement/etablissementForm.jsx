import styles from '@/styles/Home.module.css'
import React from "react";
import useEtablissementFormController from "@/controller/etablissement/form/etablissementFormController";

export default function EtablissementForm() {
    const {
        setNomEtablissement,
        setAdresse,
        setOuverture,
        heureOuverture,
        setFermeture,
        heureFermeture,
        setPrixH,
        errors,
        onSubmit
    } = useEtablissementFormController()

    return (
        <form onSubmit={e => onSubmit(e)} className={`${styles.card} ${styles.form}`}>
            <div className={styles.formComponent}>
                <label htmlFor={"nomEtablissement"}>Nom de l'établissement</label>
                <input className={styles.formInput} onChange={e => setNomEtablissement(e.target.value)}
                       id={"nomEtablissement"} type={"text"}/>
                <span className="error">{errors["nomEtablissement"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"adresseEtablissement"}>Adresse</label>
                <input id={"adresseEtablissement"} className={styles.formInput}
                       onChange={e => setAdresse(e.target.value)} type={"text"}/>
                <span className="error">{errors["adresseEtablissement"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"heureOuverture"}>Heure d'ouverture</label>
                <input id={"heureOuverture"} type={"time"} max={heureFermeture} className={styles.formInput}
                       onChange={e => setOuverture(e.target.value)}/>
                <span className={styles.error}>{errors["heureOuverture"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"heureFermeture"}>Heure de fermeture</label>
                <input id={"heureFermeture"} type={"time"} min={heureOuverture} className={styles.formInput}
                       onChange={e => setFermeture(e.target.value)}/>
                <span className={styles.error}>{errors["heureFermeture"]}</span>
            </div>

            <div className={styles.formComponent}>
                <label htmlFor={"prixH"}>Prix Horaire</label>
                <input id={"prixH"} type={"number"} step={"0.01"} className={styles.formInput}
                       onChange={e => setPrixH(e.target.value)}/>
                <span className={styles.error}>{errors["prixH"]}</span>
            </div>
            <input className={styles.formButton} type="submit" value="Valider"/>
        </form>
    )
}