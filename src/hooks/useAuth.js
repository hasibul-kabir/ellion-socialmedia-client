import { useSelector } from "react-redux"

const useAuth = () => {
    const { token, user } = useSelector((state) => state.auth)

    if (token && user) {
        return user
    } else {
        return false
    }
}

export default useAuth;