import { useContext } from "react";
import { AuthContext } from "../Helper/authReducer";


export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvier')
    }

    return context
}