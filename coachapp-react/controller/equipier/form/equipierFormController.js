import {useState} from "react";


export default function useEquipierFormController() {
    const [nom, setNom] = useState('')
    const [image, setImage] = useState({})
    const [errors, setErrors] = useState({})

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
        errors,
        onSubmit
    }
}