import React from "react";
import MonCompte from "@/pages/moncompte/MonCompte";
import {useEffect, useState} from "react";
import useUserModel from "@/models/user/userModel";
import Cookies from "js-cookie";

export default function MoncompteContainer() {
    const {
        getCurrentUserId,
        getUserInfo,
        modifyUser
    } = useUserModel()

    const [seeUserForm, setSeeUserForm] = useState(false)
    const [currentUser, setCurrentUser] = useState({
        id: null,
        nom: "Waiting...",
        prenom: "Waiting...",
        email: "Waiting...",
        pseudo: "Waiting...",
        role: []

    })
    const [changeUserInfoFormState, setChangeUserInfoFormState] = useState({})
    const [error, setErrors] = useState({})
    const [render, setRender] = useState(true)
    console.log(error)

    useEffect(() => {
        getCurrentUserId(Cookies.get('token')).then((response) => {
            getUserInfo({id: response.userId, token: Cookies.get('token')}).then((res) => {
                setCurrentUser({
                    id: res.id,
                    nom: res.nom,
                    prenom: res.prenom,
                    email: res.email,
                    pseudo: res.pseudo,
                    role: res.role
                })
            })
        })
    },[render])


    const resetPassword = function resetPassword(){
        console.log("Password reset action")
        //     TODO: Mettre un mailer afin d'envoyer un mail en récupérant les informations du USER (id du USER, nom, prénom, email) on attend pas de réponse pour cette fonction.
        //     handleResetPassword(user.nom, user.prenom, user.email, user.id)
    }

    const userForm = function UserForm() {
        {seeUserForm ? setSeeUserForm(false) : setSeeUserForm(true)}
    }

    function handleValidation () {
        const formErrors = {};
        let formIsValid = true;

        if(typeof changeUserInfoFormState.email !== "undefined"){
            let lastAtPos = changeUserInfoFormState.email.lastIndexOf('@');
            let lastDotPos = changeUserInfoFormState.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && changeUserInfoFormState.email.indexOf('@@') === -1 && lastDotPos > 2 && (changeUserInfoFormState.email.length - lastDotPos) > 2)) {
                formIsValid = false
                formErrors["email"] = "Email is not valid";
            }
        }

        setErrors(formErrors)
        console.log(formErrors)
        return formIsValid;
    }

    const onSubmit = function handleSubmit(e) {
        e.preventDefault()
        if(handleValidation()) {
            console.log('Modification du User')
            modifyUser({token: Cookies.get('token'), id: currentUser.id, userInfo: changeUserInfoFormState}).then(() => {
                 return setRender(!render)
            })
        }
    }

    return (
        <>
            <MonCompte
                resetPassword={resetPassword}
                seeUserForm={seeUserForm}
                userForm={userForm}
                userInformations={currentUser}
                onSubmit={onSubmit}
                setFormState={setChangeUserInfoFormState}
            />
        </>
    )
}