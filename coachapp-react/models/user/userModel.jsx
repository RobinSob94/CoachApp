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


    return {
        fetchCurrentUser
    }
}