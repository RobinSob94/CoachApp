import styles from '@/styles/Home.module.css'

export default function ChangeUserInfoForm({userInfo}) {
    return (
        <form onSubmit={e => onSubmit(e, userInfo.id)} className={`${styles.card} ${styles.form}`}>
            <div className={styles.formComponent}>
                <label htmlFor={'nom'}>Nom</label>
                <input type={"text"} value={userInfo.nom} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'prenom'}>Prénom</label>
                <input type={"text"} value={userInfo.prenom} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'email'}>Email</label>
                <input type={"text"} value={userInfo.email} className={styles.formInput}/>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={'pseudo'}>Pseudo</label>
                <input type={"text"} value={userInfo.pseudo} className={styles.formInput}/>
            </div>
            <input className={styles.formButton} type="submit" value="Valider"/>
        </form>
    )
}