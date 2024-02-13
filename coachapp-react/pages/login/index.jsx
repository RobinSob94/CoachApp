import React, {useState} from 'react';
import LoginForm from "@/form/login/loginForm";
import md5 from 'md5'
import Cookies from "js-cookie";
import useUserModel from "@/models/user/userModel";
import { useRouter } from 'next/navigation'


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [stateFormError, setStateFormError] = useState("")

    const router = useRouter();

    const {
        authentication
    } = useUserModel()

    function handleValidation () {
        const formErrors = {};
        let formIsValid = true;

        if(!email) {
            formIsValid = false;
            formErrors["email"] = "Cannot be empty"
        }

        if(typeof email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
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
        const encryptedPassword = md5(password)
        e.preventDefault();
        if (handleValidation()) {
            authentication({
                "email": email,
                "password": encryptedPassword
            }).then((response) => {
                Cookies.remove('token')
                if (response.status && response.status === 404)
                    return setStateFormError("Utilisateur non trouvé")
                try {
                    const token = response.token;
                    Cookies.set('token', token, { expires: 1, secure: true, SameSite: 'None' });
                    router.push('/')
                } catch (error) {
                    console.log('Failed to set Cookie for token')
                }
            })
        } else {
            setStateFormError("Le formulaire contient des erreurs")
        }
    }
    return (
        <LoginForm
            setEmail={setEmail}
            setPassword={setPassword}
            errors={errors}
            onSubmit={onSubmit}
            formError={stateFormError}
        />
    )
}
