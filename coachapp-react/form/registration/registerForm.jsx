import styles from '@/styles/Home.module.css'
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default function RegisterForm({...props}) {
    return (
            <div className={styles.registrationFormContainer}>
                <div className={styles.formTitle}>Inscription</div>
                <div className={styles.card}>
                    <form onSubmit={e => props.onSubmit(e)} className={`${styles.form}`}>
                       <span>{props.stateFormError}</span>
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
                    <Link href={"/login"}>Se connecter</Link>
                </div>
            </div>
    )
}

RegisterForm.propTypes = {
    setEmail: PropTypes.func.isRequired,
    setNom: PropTypes.func.isRequired,
    setPrenom: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setPseudo: PropTypes.func.isRequired,
    setRole: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
    stateFormError: PropTypes.string.isRequired
};