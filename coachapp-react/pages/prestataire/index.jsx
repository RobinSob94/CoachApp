import React from "react";
import {useEffect, useState} from "react";
import useprestaModel from "@/models/presta/prestaModel";
import Prestataire from "@/pages/prestataire/Prestataire";
export default function Presta() {

    const {
        prestaUnique,
        fetchPrestas
    } = useprestaModel()

    const [getPrestaUnique, setGetPrestaUnique] = useState({})
    const [prestataires, setPrestataires] = useState([])
    const [display, setDisplay] = useState(false)

    useEffect(() => {
    const fetchP = async () => {
        const dataUnique = await prestaUnique()
        const data = await fetchPrestas()
        setGetPrestaUnique(dataUnique)
        setDisplay(true)
        return setPrestataires(data)
    }
        fetchP()
    }, []);
    return (
        <>
            {display && <Prestataire
                presta={getPrestaUnique}
                prestataires={prestataires}/>}
        </>
    )
}