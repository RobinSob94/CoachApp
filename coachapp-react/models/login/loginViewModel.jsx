import useLoginModel from './loginModel';


export default function useLoginViewModel () {
    const {
        getJwt,
        tryLogin
    } = useLoginModel()

    return {
        getJwt,
        tryLogin
    }
}