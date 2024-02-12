import Admin from "@/pages/admin/admin";
import React, {useEffect, useState} from "react";
import useUserModel from "@/models/user/userModel";
import Error403 from "@/pages/errors/403";


export default function AdminContainer() {
    const [admin, setAdmin] = useState(false)
    const {
        isAdmin
    } = useUserModel()

    useEffect(() => {
        const userIsAdmin = async() => {
            const data = await isAdmin()
            return setAdmin(data)
        }

        userIsAdmin()
    }, []);

    return (
        <>
            {admin ? <Admin /> : <Error403 /> }
        </>

    )
}