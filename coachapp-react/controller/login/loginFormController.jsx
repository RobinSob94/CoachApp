import {useState} from "react";

export default function useLoginController() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    // const {
    //     jwt,
    //     trylogin
    // } = useLoginViewModel()

    function handleValidation () {
        const formErrors = {};
        let formIsValid = true;

        if(!email) {
            formIsValid = false;
            formErrors["email"] = "Cannot be empty"
        }

        if(typeof email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            console.log(lastAtPos)
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false
                formErrors["email"] = "Email is not valid";
            }
        }

        if(!password) {
            formIsValid = false;
            formErrors["password"] = "Cannot be empty";
        }

        setErrors(formErrors)
        return formIsValid;
    }

    const onSubmit =  function handleSubmit(e) {
        e.preventDefault();
        if (handleValidation()) {
            // C'est de l'async pour faire le login avec: trylogin(email, password)
            // TODO: La gestion de l'erreur de connexion avec probablement la variable errors.
            alert("Form submitted")
            console.log(email)
            console.log(password)
            //     TODO: Need connexion to api and force redirect to mainPage along with saving JWT token.
        } else {
            alert("Form has errors.")
            console.log(email)
            console.log(password)
        }
    }

    return {
        setEmail,
        setPassword,
        errors,
        onSubmit
    }
}
