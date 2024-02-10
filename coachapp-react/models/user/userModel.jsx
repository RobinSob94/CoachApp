export default function useUserModel() {
    function fetchCurrentUser() {
        return {
            id: 1,
            image: '../../public/img.png',
            nom: 'Maux',
            prenom: 'Jeude',
            email: 'jeudemaux@false.com',
            pseudo: 'Manik-et-1',
            role: 'USER'
        }
    }

    function isAdmin() {
        return false
    }

    function isPrestataire(id) {
        return true
    }

    function getReservations () {
        return [
            {
                id: 209,
                date_reservation: 'timestamp',
                note: 1,
                commentaire: 'Trop naze',
                heure_reservation: 'timestamp',
                equipier: 56,
                services: [85,89],
                users: 56
            },
            {
                id: 210,
                date_reservation: 'timestamp',
                note: 5,
                commentaire: 'Trop bien',
                heure_reservation: 'timestamp',
                equipier: 57,
                services: [89],
                users: 56
            }

        ]
    }

    function setNewPassword() {
        // TODO: Rajouter la logique permettant de passer des nouveaux mots de passe
        return true;
    }

    function setNewUser ({users}) {
        console.log(users)
        return true
    }

    return {
        fetchCurrentUser,
        isAdmin,
        isPrestataire,
        setNewUser,
        setNewPassword,
        getReservations
    }
}