
import {useEffect, useState} from "react";
import useprestaModel from "@/models/presta/prestaModel";
import Prestataire from "@/pages/prestataire/prestataire";


export default function PrestaContainer() {
    const {
        fetchPrestaUnique
    } = useprestaModel()

    // const [presta, setPresta] = useState({})
const [prestataires, setPrestataires] = useState([])
const [display, setDisplay] = useState(false)

    useEffect(() => {
    const fetchP = async () => {
        const data = await fetchPrestaUnique()
        setDisplay(true)
        return setPrestataires(data)
    }

    fetchP()
        // TODO: Voir avec ce tuto https://devtrium.com/posts/async-functions-useeffect
    }, []);

    return (
        <>
            {display && <Prestataire
                // presta={presta}
                prestataires={prestataires}/>}
        </>
    )
}