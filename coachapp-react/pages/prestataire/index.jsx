
import {useEffect, useState} from "react";
import useprestaModel from "@/models/presta/prestaModel";
import Prestataire from "@/pages/prestataire/prestataire";


export default function PrestaContainer() {
    const {
        fetchPrestaUnique,
        fetchPrestas
    } = useprestaModel()

    const [prestaUnique, setPrestaUnique] = useState({})
    const [prestataires, setPrestataires] = useState([])
    const [display, setDisplay] = useState(false)

    useEffect(() => {
    const fetchP = async () => {
        const dataUnique = await fetchPrestaUnique()
        const data = await fetchPrestas()
        setPrestaUnique(dataUnique)
        setDisplay(true)
        return setPrestataires(data)
    }

    fetchP()
        // TODO: Voir avec ce tuto https://devtrium.com/posts/async-functions-useeffect
    }, []);

    return (
        <>
            {display && <Prestataire
                presta={prestaUnique}
                prestataires={prestataires}/>}
        </>
    )
}