import styles from '@/styles/Home.module.css'
import React from "react";
import PropTypes from "prop-types";

export default function ChangeUserInfoForm({userInfo, onSubmit, setFormState}) {
    return (
        <form onSubmit={e => onSubmit(e, userInfo.id)} className={`${styles.card} ${styles.form}`}>
            <div className={styles.formComponent}>
                <label htmlFor={'nom'}>Nom</label>
                <input id={'nom'} type={"text"} onChange={e => setFormState({nom: e.target.value} )} defaultValue={userInfo.nom} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'prenom'}>Prénom</label>
                <input id={'prenom'} type={"text"} onChange={e => setFormState({prenom: e.target.value})} defaultValue={userInfo.prenom} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'email'}>Email</label>
                <input id={'email'} type={"text"} onChange={e => setFormState({email: e.target.value})} defaultValue={userInfo.email} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'pseudo'}>Pseudo</label>
                <input id={'pseudo'} type={"text"} onChange={e => setFormState({pseudo: e.target.value})} defaultValue={userInfo.pseudo} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'img'}>Profile picture</label>
                <input id={'img'} type={'file'} onChange={e => setFormState({image: e.target.files[0]})} accept={'.png .jpeg'} className={styles.formInput}/>
            </div>
            <input className={styles.formButton} type="submit" value="Valider"/>
        </form>
    )
}

ChangeUserInfoForm.propTypes = {
    userInfo: PropTypes.shape({
        nom: PropTypes.string.isRequired,
        pseudo: PropTypes.string.isRequired,
        prenom: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }),
    onSubmit: PropTypes.func,
    setFormState: PropTypes.func,
};