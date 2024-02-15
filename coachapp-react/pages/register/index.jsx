import React from 'react'
import RegisterForm from "@/form/registration/registerForm";
import {useRouter} from "next/navigation";
import {useState} from "react";
import useUserModel from "@/models/user/userModel";
import md5 from 'md5'
import Cookies from "js-cookie";


export default function Register() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pseudo, setPseudo] = useState('')
    const [role, setRole] = useState('')
    const [errors, setErrors] = useState({})
    const [stateFormError, setStateFormError] = useState('')

    const router = useRouter()

    const {
        authentication,
        newUser,
    } = useUserModel()

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

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
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
        const encryptedPassword = md5(password)
        if(handleValidation()){
            if (role === 'PRESTATAIRE') {
                newUser({
                    "nom": nom,
                    "prenom": prenom,
                    "email": email,
                    "updatedAt": new Date(),
                    "createAt": new Date(),
                    "pseudo": pseudo,
                    "roles": ['ROLE_PRESTATAIRE'],
                    "password": encryptedPassword
                }).then((data) => {
                    authentication({
                        "email": data.email,
                        "password": encryptedPassword
                    }).then((response) => {
                        try {
                            const token = response.token;
                            Cookies.remove('token')
                            Cookies.set('token', token, { expires: 1, secure: true, SameSite: 'None' });
                            router.push('/register/prestataire')
                        } catch (error) {
                            console.log('Failed to set Cookie for token')
                        }
                    })
                })

            }
            if (role === 'USER') {
                newUser({
                    "nom": nom,
                    "prenom": prenom,
                    "email": email,
                    "updatedAt": new Date(),
                    "createAt": new Date(),
                    "pseudo": pseudo,
                    "roles": ['ROLE_USER'],
                    "password": encryptedPassword
                }).then((data) => {
                    authentication({
                        "email": data.email,
                        "password": encryptedPassword
                    }).then((response) => {
                            try {
                                const token = response.token;
                                Cookies.remove('token')
                                Cookies.set('token', token, { expires: 1, secure: true, SameSite: 'None' });
                                router.push("/")
                            } catch (error) {
                                console.log('Failed to set Cookie for token')
                            }
                    })

                })
            }
        }else{
            console.log(nom + ' ' + prenom + ' ' + pseudo + ' ' + email + ' ' + password + ' ' + role)
            setStateFormError('Le formulaire contient des erreurs')
        }
    }

    return (
        <>
            <RegisterForm
            setEmail = {setEmail}
            setNom={setNom}
            setPrenom={setPrenom}
            setPseudo={setPseudo}
            setPassword={setPassword}
            setRole={setRole}
            errors={errors}
            onSubmit={onSubmit}
            stateFormError={stateFormError}
            />
        </>
    )
}

