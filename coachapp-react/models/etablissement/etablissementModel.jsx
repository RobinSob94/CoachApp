import {log} from "next/dist/server/typescript/utils";

export default function useEtablissementModel() {
    const getAllEtablissementFromOnePrestataire = async (id) => {
        console.log(id)
        return [{
            id: 2,
            nom_etablissement: 'E1',
            adresse: '2 rue du Poirier',
            image: 'lien image sur le serveur',
            heure_open: 'timestamp_open',
            heure_close: 'timestamp_close',
            prixH: 40.00,
            equipiers: [1,12,15],
            servicess: [1,2,3],
            prestataire: 54
        },
            {
                id: 3,
                nom_etablissement: 'E2',
                adresse: '2 rue de la Pomme',
                image: 'lien image sur le serveur',
                heure_open: 'timestamp_open',
                heure_close: 'timestamp_close',
                prixH: 45.00,
                equipiers: [2,13,16],
                servicess: [1,2,3],
                prestataire: 54
            },
            {
                id: 4,
                nom_etablissement: 'E3',
                adresse: '2 rue de la Fraise',
                image: 'lien image sur le serveur',
                heure_open: 'timestamp_open',
                heure_close: 'timestamp_close',
                prixH: 35.99,
                equipiers: [4,10],
                servicess: [1,3],
                prestataire: 54
            }]
    }

    const getOneEtablissementFromOnePrestataire = async (id_E, id_P) => {
        await console.log(id_E+' '+id_P)
        return {
            id: 4,
            nom_etablissement: 'E2',
            adresse: '2 rue de la Fraise',
            image: 'lien image sur le serveur',
            heure_open: 'timestamp_open',
            heure_close: 'timestamp_close',
            prixH: 35.99,
            equipiers: [4,10],
            servicess: [1,3],
            prestataire: 54
        }
    }

    const getAllEtablissement = async () => {
        console.log('All Etablissement');
        return [
            {
                id: 2,
                nom_etablissement: 'E1',
                adresse: '2 rue du Poirier',
                image: 'lien image sur le serveur',
                heure_open: 'timestamp_open',
                heure_close: 'timestamp_close',
                prixH: 40.00,
                equipiers: [1,12,15],
                servicess: [1,2,3],
                prestataire: 54
            },
            {
                id: 3,
                nom_etablissement: 'E2',
                adresse: '2 rue de la Pomme',
                image: 'lien image sur le serveur',
                heure_open: 'timestamp_open',
                heure_close: 'timestamp_close',
                prixH: 45.00,
                equipiers: [2,13,16],
                servicess: [1,2,3],
                prestataire: 54
            },
            {
                id: 4,
                nom_etablissement: 'E2',
                adresse: '2 rue de la Fraise',
                image: 'lien image sur le serveur',
                heure_open: 'timestamp_open',
                heure_close: 'timestamp_close',
                prixH: 35.99,
                equipiers: [4,10],
                servicess: [1,3],
                prestataire: 54
            }
        ]
    }

    const getServicesFromOneEtablissement = async (id) => {
        await console.log(id)
        return [
            {
                id: 1,
                libelle: 'Manger',
            },
            {
                id: 2,
                libelle: 'Training Session'
            },
            {
                id: 3,
                libelle: 'Boissons'
            }
        ]
    }

    const addServiceToEtablissement = async (id_S, id_E) => {
        await console.log('Service Id '+id_S+'; Etablissement Id '+id_E)
        return true
    }

    const deleteServiceFromEtablissement = async (id_S, id_E) => {
        await console.log('Service Id '+id_S+'; Etablissement Id '+id_E)
        return true
    }

    return {
        getAllEtablissement,
        getOneEtablissementFromOnePrestataire,
        getAllEtablissementFromOnePrestataire,
        addServiceToEtablissement,
        getServicesFromOneEtablissement,
        deleteServiceFromEtablissement

    }
}