import {useState} from "react";


export default function useEquipierFormController() {
    const [nom, setNom] = useState('')
    const [image, setImage] = useState({})
    const [prestaChoix, setPresta] = useState(0)
    const [errors, setErrors] = useState({})

    /* TODO: Ici doit être fait un appel à la base de donnée afin de passer les informations necessaires: ID et NOM
        du prestataire*/
    const prestas = [
        {
            id: 1,
            nom: "presta1"
        },
        {
            id: 2,
            nom: "presta2"
        },
        {
            id: 3,
            nom: "presta3"
        }
    ]

    function handleValidation() {
        const formErrors = {}
        let isFormValid = true

        if(!nom) {
            isFormValid = false
            formErrors["nom"] = "Cannot be empty"
        }

        setErrors(formErrors)
        return isFormValid
    }

    const onSubmit = function handleSubmit(e) {
        e.preventDefault()
        if (handleValidation()) {
            console.log("Nom: " + nom)
            alert("Form is valid")
        }else{
            console.log("Nom: " + nom)
            alert("Form has errors")
        }
    }


    return {
        setNom,
        setImage,
        setPresta,
        prestas,
        prestaChoix,
        errors,
        onSubmit
    }
}