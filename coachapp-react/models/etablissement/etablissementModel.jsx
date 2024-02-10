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

    return {
        getAllEtablissement,
        getOneEtablissementFromOnePrestataire,
        getAllEtablissementFromOnePrestataire
    }
}