import {useState} from "react";


export default function useServiceFormController() {
    const [libelle, setLibelle] = useState("")
    const [prix, setPrix] = useState(0)
    const [error, setError] = useState([])

    const onSubmit = function(e) {
        // TODO: Ajouter une fonction de vérification
        console.log("Submited")
    }

    return {
        setLibelle,
        setPrix,
        error,
        onSubmit
    }
}