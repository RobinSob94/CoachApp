import styles from '@/styles/Home.module.css'
import React from "react";
import PropTypes from "prop-types";

export default function ChangeUserInfoForm({userInfo, onSubmit}) {
    return (
        <form onSubmit={e => onSubmit(e, userInfo.id)} className={`${styles.card} ${styles.form}`}>
            <div className={styles.formComponent}>
                <label htmlFor={'nom'}>Nom</label>
                <input id={'nom'} type={"text"} defaultValue={userInfo.nom} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'prenom'}>Prénom</label>
                <input id={'prenom'} type={"text"} defaultValue={userInfo.prenom} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'email'}>Email</label>
                <input id={'email'} type={"text"} defaultValue={userInfo.email} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'pseudo'}>Pseudo</label>
                <input id={'pseudo'} type={"text"} defaultValue={userInfo.pseudo} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'img'}>Profile picture</label>
                <input id={'img'} type={'file'} accept={'.png .jpeg'} className={styles.formInput}/>
            </div>
            <input className={styles.formButton} type="submit" value="Valider"/>
        </form>
    )
}

ChangeUserInfoForm.propTypes = {
    userInfo: PropTypes.shape({
        nom: PropTypes.string,
        pseudo: PropTypes.string.isRequired,
        prenom: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
        onSubmit: PropTypes.func
};