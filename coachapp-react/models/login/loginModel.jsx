import {useState} from "react";

export default function useLoginModel () {
    const [jwt, setJWT] = useState('')
    let isValidConnection = false;

    const tryLogin = function handleLogin(email, password) {
        if (isValidConnection) {
            setJWT('aze')
        }

        return {
            jwt,
            tryLogin
        }
    }
}