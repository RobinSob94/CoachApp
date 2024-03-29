import React from "react";
import useUserModel from "@/models/user/userModel";
import usePrestaModel from "@/models/presta/prestaModel";
import useEtablissementModel from "@/models/etablissement/etablissementModel";
import {useEffect, useState} from "react";
//import PrestaListEtablissement from "@/components/UIComponents/prestaListEtablissement";
import PrestaGestionContainter from "@/pages/maGestion/PrestaGestionContainter";
import Error403 from "@/pages/errors/403";

export default function PrestaGestion() {
    const {
        isPrestataire
    } = useUserModel()

    const {
        prestaUnique
    } = usePrestaModel()

    const {
        getAllEtablissementFromOnePrestataire
    } = useEtablissementModel()

    const [allEtablissementFromOnePrestataire, setAllEtablissementFromOnePrestataire] = useState([{}])
    const [prestataireUnique, setPrestataireUnique] = useState({})
    const [isPresta, setIsPresta] = useState(false)

    const id = 19

    useEffect(() => {
        const fetchIsPresta = async () => {
            const data = await isPrestataire(id)
            return setIsPresta(data)
        }
        fetchIsPresta()
        console.log('fetchIsPresta')

        if (isPresta === true) {
            const fetchPrestaUnique = async () => {
                const data = await prestaUnique(id)
                setPrestataireUnique(data)
                return true
            }

            if (prestataireUnique !== {}) {
                const fetchAllEtablissement = async () => {
                    const data = await getAllEtablissementFromOnePrestataire(id)
                    return setAllEtablissementFromOnePrestataire(data)
                }
                fetchAllEtablissement()
                console.log('fetchAllEtablissement')
            }
            fetchPrestaUnique()
            console.log('fetchPrestaUnique')
        }
    }, [isPresta])

    return (
        <>
            {isPresta ?
                <div>
                    <PrestaGestionContainter etablissements={allEtablissementFromOnePrestataire} isPresta={isPresta} prestataire={prestataireUnique}/>
                </div> : <> <Error403 /> </>}
        </>
    )
}