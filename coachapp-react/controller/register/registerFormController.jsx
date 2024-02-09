import {useState} from "react";
import {useRouter} from "next/navigation";

export default function useRegisterController() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pseudo, setPseudo] = useState('')
    const [role, setRole] =useState('')
    const [errors, setErrors] = useState({})

    const router = useRouter()

    /* const {
        TODO: Insert code from useRegisterViewModel
    }*/

    function handleValidation () {
        const formErrors = {};
        let formIsValid = true;

        //Email
        if(!email){
            formIsValid = false;
            formErrors["email"] = "Cannot be empty";
        }

        if(typeof email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formIsValid = false;
                formErrors["email"] = "Email is not valid";
            }
        }

        if(!password){
            formIsValid = false;
            formErrors["password"] = "Cannot be empty";
        }

        if(!pseudo){
            formIsValid = false;
            formErrors["pseudo"] = "Cannot be empty";
        }

        if(!nom){
            formIsValid = false;
            formErrors["nom"] = "Cannot be empty";
        }

        if(!prenom){
            formIsValid = false;
            formErrors["prenom"] = "Cannot be empty";
        }

        if(!role){
            formIsValid = false;
            formErrors["role"] = "Cannot be empty";
        }

        setErrors(formErrors)
        return formIsValid;
    }

    const onSubmit = function handleSubmit(e){
        e.preventDefault();
        if(handleValidation()){
            console.log(nom + ' ' + prenom + ' ' + pseudo + ' ' + email + ' ' + password + ' ' + role)
            if (role === 'PRESTATAIRE')
            // TODO: Need to have the JWT token at this point to continue registering prestataire while connected
                router.push('/register/prestataire')
            //     TODO: Need connexion to api and force redirect to mainPage along with saving JWT token.
            alert("Form submitted");
        }else{
            console.log(nom + ' ' + prenom + ' ' + pseudo + ' ' + email + ' ' + password + ' ' + role)
            alert("Form has errors.")
        }
    }

    return {
        setEmail,
        setNom,
        setPrenom,
        setPseudo,
        setPassword,
        setRole,
        errors,
        onSubmit
    }

}