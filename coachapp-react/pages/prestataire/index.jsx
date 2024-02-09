
import {useEffect, useState} from "react";
import useprestaModel from "@/models/presta/prestaModel";
import Prestataire from "@/pages/prestataire/prestataire";
import React from "react";
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
    }, []);

    return (
        <>
            {display && <Prestataire
                presta={prestaUnique}
                prestataires={prestataires}/>}
        </>
    )
}