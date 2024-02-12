import styles from '@/styles/Home.module.css';
import React, {useEffect, useState} from "react";
import Navbar from "@/components/UIComponents/navbar";
import useUserModel from "@/models/user/userModel";
export default function NavbarContainer() {
    const {
        isPrestataire,
        isAdmin
    } = useUserModel()

    const [isPresta, setIsPresta] = useState(false)
    const [isAdministrateur, setIsAdministrateur] = useState(false)

    const id = 18;

    useEffect(() => {
        const fetchIsPresta = async () => {
            const data = await isPrestataire(id)
            return setIsPresta(data)
        }

        const fetchIsAdmin = async () => {
            const data = await isAdmin(id)
            return setIsAdministrateur(data)
        }


        fetchIsPresta()
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