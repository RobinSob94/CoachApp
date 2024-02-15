import styles from '@/styles/Home.module.css';
import React, {useEffect, useState} from "react";
import Navbar from "@/components/UIComponents/navbar";
import useUserModel from "@/models/user/userModel";
import Cookies from "js-cookie";
export default function NavbarContainer() {
    const {
        getUserRole,
        getCurrentUserId
    } = useUserModel()

    const [isPresta, setIsPresta] = useState(false)
    const [isAdministrateur, setIsAdministrateur] = useState(false)

    useEffect(() => {
            getCurrentUserId(Cookies.get('token')).then((response) => {
                if (!response.code) {
                    getUserRole({id: response.userId, token: Cookies.get('token')}).then((res) => {
                        console.log(res.role)
                        if (res.role.includes("ROLE_PRESTATAIRE")) {
                            setIsPresta(true)
                        }
                        if (res.role.includes("ROLE_ADMIN")) {
                            setIsAdministrateur(true)
                        }
                    })
                } else {
                    console.log('Erreur dans la récupération des role du USER'+response.code)
                }
            })
    }, [])
    return (
        <>
                <nav className={styles.nav}>
                    <Navbar isPresta={isPresta} isAdmin={isAdministrateur}/>
                </nav>
        </>

    )
}