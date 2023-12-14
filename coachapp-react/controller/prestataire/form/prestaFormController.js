import {useState} from "react";
// import userViewModel --> de là on pourra retrouver le USER actuel avec une fonction
// getUserId, quelque chose dans le genre.
import {useRouter} from "next/navigation";
// import usePrestaViewModel from "@/models/prestataire/prestaViewModel";

export default function usePrestaFormController() {
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [adresse, setAdresse] = useState('')
    const [nomEntreprise, setNomEntreprise] = useState('')
    const [ville, setVille] = useState('')
    const [codePostal, setCodePostal] = useState('')
    const [logo, setLogo] = useState({})
    const [kbis, setKbis] = useState({})
    const [errors, setErrors] = useState({})

    const router = useRouter()

    /* const {
        TODO: Insert code from usePrestaViewModel
    }*/

    function handleValidation() {
        const formErrors = {};
        let formIsValid = true

        // Email
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

        if(!telephone){
            formIsValid = false;
            formErrors["password"] = "Cannot be empty";
        }

        if(typeof telephone !== "undefined") {
            let firstZero = telephone.indexOf('0')
            let firstPlus = telephone.indexOf('+')
            if (firstZero !== 0 && firstPlus !== 0){
                formIsValid = false
                formErrors["telephone"] = "This isn't a valid form number"
            }
        }

        if(!adresse){
            formIsValid = false
            formErrors["adresse"] = "Cannot be empty"
        }

        if(!codePostal){
            formIsValid = false
            formErrors["codePostal"] = "Cannot be empty"
        }

        if(!ville){
            formIsValid = false
            formErrors["ville"] = "Cannot be empty"
        }

        if(!nomEntreprise){
            formIsValid = false
            formErrors["nomEntreprise"] = "Cannot be empty"
        }

        if(!kbis){
            formIsValid = false
            formErrors["kbis"] = "Cannot be empty"
        }

        setErrors(formErrors)
        return formIsValid
    }

    const onSubmit = function handleSubmit(e) {
        e.preventDefault()
        if(handleValidation()){
            console.log(nomEntreprise + ' ' + addPostale + ' ' + telephone + ' ' + email)
            alert('Form submitted')
        }else{
            console.log(nomEntreprise + ' ' + addPostale + ' ' + telephone + ' ' + email)
            alert('Form hase errors')
        }
    }

    return {
        setEmail,
        setTelephone,
        setNomEntreprise,
        setAdresse,
        setVille,
        setCodePostal,
        setKbis,
        setLogo,
        errors,
        onSubmit
    }
}