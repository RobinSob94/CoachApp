import styles from '@/styles/Home.module.css'
import {useState} from "react";

export default function LoginForm() {
    const [fields, setFields] = useState({})
    const [errors, setErrors] = useState({})

    function handleValidation () {
        const formFields = {...fields};
        const formErrors = {};
        let formIsValid = true;

        if(!formFields["email"]) {
            formIsValid = false;
            formErrors["email"] = "Cannot be empty"
        }

        if(typeof formFields["email"] !== "undefined"){
            let lastAtPos = formFields["email"].lastIndexOf('@');
            console.log(lastAtPos)
            let lastDotPos = formFields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && formFields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false
                formFields["email"] = "Email is not valid";
            }
        }

        if(!formFields["password"]) {
            formIsValid = false;
            formErrors["password"] = "Cannot be empty";
        }

        setErrors(formErrors)
        return formIsValid;
    }

    function handleChange(field, value){
        setFields({...fields, [field]: value})
    }
function handleSubmit(e) {
 e.preventDefault();
 if (handleValidation()) {
     alert("Form submitted")
 //     TODO: Need connexion to api and force redirect to mainPage along with saving JWT token.
 } else {
     alert("Form has errors.")
 }
}

    return (
    <form onSubmit={e => handleSubmit(e)} className={`${styles.card} ${styles.loginForm}`}>
        <div className={styles.formComponent}>
            <label htmlFor={"email"}>Email</label>
            <input className={styles.formInput} onChange={e => handleChange('email', e.target.value)} id={"email"} type={"text"} />
        </div>
        <div className={styles.formComponent}>
            <label htmlFor={"id"}>Mot de passe</label>
            <input className={styles.formInput} onChange={e => handleChange('password', e.target.value)} type={"password"}/>
        </div>
        <input className={styles.formButton} type="submit" value="Connexion" />
    </form>
)
}