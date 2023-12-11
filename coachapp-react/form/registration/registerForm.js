import styles from '@/styles/Home.module.css'
import {useState} from "react";

export default function RegisterForm() {

    const [fields, setFields] = useState({})
    const [errors, setErrors] = useState({})

    function handleValidation () {
        const formFields = {...fields};
        const formErrors = {};
        let formIsValid = true;

    //Email
    if(!formFields["email"]){
        formIsValid = false;
        formErrors["email"] = "Cannot be empty";
    }

    if(typeof formFields["email"] !== "undefined"){
        let lastAtPos = formFields["email"].lastIndexOf('@');
        let lastDotPos = formFields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && formFields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            formFields["email"] = "Email is not valid";
        }
    }

    if(!formFields["password"]){
        formIsValid = false;
        formErrors["password"] = "Cannot be empty";
    }

    if(!formFields["pseudo"]){
        formIsValid = false;
        formErrors["pseudo"] = "Cannot be empty";
    }

    if(!formFields["nom"]){
        formIsValid = false;
        formErrors["nom"] = "Cannot be empty";
    }

    if(!formFields["prenom"]){
        formIsValid = false;
        formErrors["prenom"] = "Cannot be empty";
    }

    if(!formFields["role"]){
        formIsValid = false;
        formErrors["role"] = "Cannot be empty";
    }

    setErrors(formErrors)
    return formIsValid;
}
    const handleChange = (field, value) => {
        setFields({...fields, [field]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(handleValidation()){
            alert("Form submitted");
            //     TODO: Need connexion to api and force redirect to mainPage along with saving JWT token.
        }else{
            alert("Form has errors.")
        }
    }
    return (
        <form onSubmit={e => handleSubmit(e)} className={`${styles.card} ${styles.loginForm}`}>
            <div className={styles.formComponent}>
                <label htmlFor={"nom"}>Nom</label>
                <input className={styles.formInput} onChange={e => handleChange('nom', e.target.value)} id={"nom"}
                       type={"text"}/>
                <span className="error">{errors["nom"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"prenom"}>Prenom</label>
                <input className={styles.formInput} onChange={e => handleChange('prenom', e.target.value)} id={"prenom"}
                       type={"text"}/>
                <span className="error">{errors["prenom"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"email"}>Email</label>
                <input onChange={e => handleChange('email', e.target.value)} className={styles.formInput} id={"email"}
                       type={"text"}/>
                <span className="error">{errors["email"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"pseudo"}>Pseudo</label>
                <input className={styles.formInput} onChange={e => handleChange('pseudo', e.target.value)} id={"pseudo"}
                       type={"text"}/>
                <span className="error">{errors["pseudo"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"password"}>Mot de passe</label>
                <input className={styles.formInput} onChange={e => handleChange('password', e.target.value)}
                       id={"password"} type={"password"}/>
                <span className="error">{errors["password"]}</span>
            </div>
            <div className={styles.formComponent}>
                <label htmlFor={"role"}>Vous êtes ?</label>
                <div id={"role"} className={styles.formComponent} onChange={e => handleChange('role', e.target.value)}>
                    <div><input type="radio" value="user" name="role"/> Utilisateur</div>
                    <div><input type="radio" value="presta" name="role"/> Prestataire</div>
                </div>
            </div>
            <input className={styles.formButton} type="submit" value="Connexion"/>
        </form>
    )

}