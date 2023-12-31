import {useEffect, useState} from "react";


export default function useReservationController() {
    const [service, setService] = useState()
    const [dateHoraire, setDateHoraire] = useState(new Date())
    const [equipiers, setEquipiers] = useState(null)

    async function getEquipier(id_hebergement)  {
        /*TODO: Appel du view model pour récupérer les équipier en fonction de l'hébergement qui sera fournis
        *   La fonction retournera un tableau ou un JSON détaillant les différentes horaires et jours de travail
            en fonction des des équipiers.*/

        return await setTimeout(function(){
            return [
                {
                    "id": 1,
                    "nom": "Jean",
                    "jour_travail": ["Lundi", "Mardi", "Mercredi", "Dimanche"]
                },
                {
                    "id": 2,
                    "nom": "Eude",
                    "jour_travail": ["Lundi", "Mardi", "Jeudi", "Vendredi"]
                },
                {
                    "id": 3,
                    "nom": "Myreille",
                    "jour_travail": ["Lundi", "Mardi", "Mercredi", "Vendredi"]
                },
                {
                    "id": 4,
                    "nom": "Chloé",
                    "jour_travail": ["Lundi", "Mardi", "Jeudi", "Samedi"]
                }
            ]

        }, 3000)
    }
    console.log(equipiers)

    useEffect(() => {
    setEquipiers(getEquipier(0))
    }, []);

    console.log(equipiers)


    return {
        service,
        setService,
        dateHoraire,
        setDateHoraire,
        equipiers
    }
}