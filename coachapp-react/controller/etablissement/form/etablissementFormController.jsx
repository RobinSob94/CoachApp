import {useState} from "react";


export default function useEtablissementFormController() {
    const [nomEtablissement, setNomEtablissement] = useState('')
    const [adresse, setAdresse] = useState('')
    const [heureOuverture, setOuverture] = useState('')
    const [heureFermeture, setFermeture] = useState('')
    const [prixH, setPrixH] = useState(0)
    const [errors, setErrors] = useState({})

    function handleValidation() {
        const formErrors = {}
        let formIsValid = true

        if(!nomEtablissement) {
            formIsValid = false;
            formErrors["nomEtablissement"] = "Cannot be empty";
        }

        if(!adresse) {
            formIsValid = false;
            formErrors["adresseEtablissement"] = "Cannot be empty";
        }

        if(!heureOuverture) {
            formIsValid = false;
            formErrors["heureOuverture"] = "Cannot be empty";
        }

        if(!prixH){
            formIsValid = false
            formErrors["prixH"] = "Cannot be empty"
        }

        if(!heureFermeture) {
            formIsValid = false;
            formErrors["heureFermeture"] = "Cannot be empty";
        }

        setErrors(formErrors)
        return formIsValid
    }

    const onSubmit = function handleSubmit(e) {
        e.preventDefault()
        if(handleValidation()) {
        //     TODO: Appel au model (async) + gestions des erreurs
            console.log(nomEtablissement + ' ' + adresse + ' ' + heureOuverture + ' ' + heureFermeture )
            alert('Form is submited')
        }else{
            console.log(nomEtablissement + ' ' + adresse + ' ' + heureOuverture + ' ' + heureFermeture )
            alert('Form has errors')
        }
    }

    return {
        setNomEtablissement,
        setAdresse,
        setOuverture,
        heureOuverture,
        setFermeture,
        heureFermeture,
        setPrixH,
        errors,
        onSubmit
    }
}