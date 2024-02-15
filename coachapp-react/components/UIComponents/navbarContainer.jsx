import styles from '@/styles/Home.module.css';
import React, {useEffect, useState} from "react";
import Navbar from "@/components/UIComponents/navbar";
import useUserModel from "@/models/user/userModel";
//import Cookies from "js-cookie";
export default function NavbarContainer() {
    const {
        isPrestataire,
        isAdmin,
        getCurrentUserId
    } = useUserModel()

    const [isPresta, setIsPresta] = useState(false)
    const [isAdministrateur, setIsAdministrateur] = useState(false)
    console.log(isPrestataire,getCurrentUserId, setIsPresta)
    const id = 18;

    useEffect(() => {
            // getCurrentUserId(Cookies.get('token')).then((response) => {
            //     // if (response.status === 200) {
            //     //     isPrestataire(response.)
            //     // }
            //     console.log(response)
            // })
            // const data = await isPrestataire(id)
            // return setIsPresta(data)

        const fetchIsAdmin = async () => {
            const data = await isAdmin(id)
            return setIsAdministrateur(data)
        }
        fetchIsAdmin()
    }, [])
    return (
        <>
                <nav className={styles.nav}>
                    <Navbar isPresta={isPresta} isAdmin={isAdministrateur}/>
                </nav>
        </>

    )
}