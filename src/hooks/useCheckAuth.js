import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../RTK/features/auth/authSlice";

const useCheckAuth = () => {
    const [checkAuthentication, setCheckAuthentication] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        const authData = localStorage.getItem("auth");
        if (authData) {
            const auth = JSON.parse(authData);

            if (auth?.token && auth?.user) {
                dispatch(userLoggedIn({
                    token: auth.token,
                    user: auth.user
                }))
            }
        }
        setCheckAuthentication(true)
    }, [setCheckAuthentication, dispatch])

    return checkAuthentication;
}

export default useCheckAuth;