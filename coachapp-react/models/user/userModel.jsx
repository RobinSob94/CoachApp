export default function useUserModel() {

    const newUser = async (data = {}) => {
        const response = await fetch(`http://localhost:8888/api/users`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        return response.json()
    }

    const authentication = async (data = {}) => {
        const response = await fetch('http://localhost:8888/api/token', {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        return response.json()
    }

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

    function isAdmin(id) {
        console.log(id)
        return true
    }

    function isPrestataire(id) {
        console.log(id)
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
        getReservations,
        newUser,
        authentication
    }
}