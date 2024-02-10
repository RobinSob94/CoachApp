import styles from '@/styles/Home.module.css';
import React, {useEffect, useState} from "react";
import Navbar from "@/components/UIComponents/navbar";
import useUserModel from "@/models/user/userModel";
export default function NavbarContainer() {
    const {
        isPrestataire
    } = useUserModel()

    const [isPresta, setIsPresta] = useState(false)

    const id = 18;

    useEffect(() => {
        const fetchIsPresta = async () => {
            const data = await isPrestataire(id)
            return setIsPresta(data)
        }

        fetchIsPresta()
    }, [])
    return (
        <>
                <nav className={styles.nav}>
                    <Navbar isPresta={isPresta}/>
                </nav>
        </>

    )
}