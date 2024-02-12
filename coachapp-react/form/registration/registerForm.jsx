import styles from '@/styles/Home.module.css'
import React from "react";

export default function RegisterForm({...props}) {
    return (
            <div className={styles.registrationFormContainer}>
                <div className={styles.formTitle}>Inscription</div>
                <div>
                    <form onSubmit={e => props.onSubmit(e)} className={`${styles.card} ${styles.form}`}>
                        <div className={styles.formComponent}>
                            <label htmlFor={"nom"}>Nom</label>
                            <input className={styles.formInput} onChange={e => props.setNom(e.target.value)} id={"nom"}
                                   type={"text"}/>
                            <span className="error">{props.errors["nom"]}</span>
                        </div>
                        <div className={styles.formComponent}>
                            <label htmlFor={"prenom"}>Prenom</label>
                            <input className={styles.formInput} onChange={e => props.setPrenom(e.target.value)} id={"prenom"}
                                   type={"text"}/>
                            <span className="error">{props.errors["prenom"]}</span>
                        </div>
                        <div className={styles.formComponent}>
                            <label htmlFor={"email"}>Email</label>
                            <input onChange={e => props.setEmail(e.target.value)} className={styles.formInput} id={"email"}
                                   type={"text"}/>
                            <span className="error">{props.errors["email"]}</span>
                        </div>
                        <div className={styles.formComponent}>
                            <label htmlFor={"pseudo"}>Pseudo</label>
                            <input className={styles.formInput} onChange={e => props.setPseudo(e.target.value)} id={"pseudo"}
                                   type={"text"}/>
                            <span className="error">{props.errors["pseudo"]}</span>
                        </div>
                        <div className={styles.formComponent}>
                            <label htmlFor={"password"}>Mot de passe</label>
                            <input className={styles.formInput} onChange={e => props.setPassword(e.target.value)}
                                   id={"password"} type={"password"}/>
                            <span className="error">{props.errors["password"]}</span>
                        </div>
                        <div className={styles.formComponent}>
                            <label htmlFor={"role"}>Vous êtes ?</label>
                            <div id={"role"} className={styles.formComponent} onChange={e => props.setRole(e.target.value)}>
                                <div><input type="radio" value="USER" name="role"/> Utilisateur</div>
                                <div><input type="radio" value="PRESTATAIRE" name="role"/> Prestataire</div>
                            </div>
                        </div>
                        <input className={styles.formButton} type="submit" value="Connexion"/>
                    </form>
                </div>
            </div>
    )
}