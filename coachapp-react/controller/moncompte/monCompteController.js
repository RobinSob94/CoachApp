import {useRouter, redirect} from "next/navigation";


export default function useMonCompteController() {
    // const {user} = userInfo()
    // const {isConnected} = useUserViewModel()

    const userInformations = {
        image: '../../public/img.png',
        nom: 'Maux',
        prenom: 'Jeude',
        email: 'jeudemaux@false.com',
        pseudo: 'Manik-et-1',
        role: 'USER'
    }
    return {
        userInformations
    }
}