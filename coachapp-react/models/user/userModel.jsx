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

    const modifyUser = async (data = {}) => {
        const response = await fetch(`http://localhost:8888/api/users/${data.id}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
                "Content-Type": "application/merge-patch+json",
                "Authorization": `Bearer ${data.token}`
            },
            body: JSON.stringify(data.userInfo),
        })
        return response.json()
    }

    const authentication = async (data = {}) => {
            const response = await fetch('http://localhost:8888/auth', {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
        return  response.json()
    }


    const getCurrentUserId = async (data = {}) => {
        const response = await fetch('http://localhost:8888/user/current', {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${data}`
            },
        })
        return response.json()
    }

    const getUserInfo = async (data = {}) => {
        const response = await fetch(`http://localhost:8888/api/users/${data.id}`,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${data.token}`
            }
        }
    )

        return response.json()
    }

    const getUserRole = async (data = {}) => {
            const response = await fetch(`http://localhost:8888/user/roles/${data.id}`, {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${data.token}`
                }
            })
        return response.json()
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
        getUserRole,
        setNewUser,
        setNewPassword,
        getReservations,
        newUser,
        modifyUser,
        authentication,
        getUserInfo,
        getCurrentUserId
    }
}