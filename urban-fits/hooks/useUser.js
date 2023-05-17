import { useState } from "react";
import { useRouter } from "next/router";
import toaster from "@/utils/toast_function";
import jwt from 'jsonwebtoken';

export default function useUser() {
    const router = useRouter()
    const getInitialToken = () => {
        const token = jwt.decode(localStorage.getItem("authToken"))
        if (token && token._doc && token._doc.email) return token._doc
        else return null
    }
    const [user, setUser] = useState(getInitialToken)

    const updateUser = (token) => {
        localStorage.setItem("authToken", token)
        const userData = jwt.decode(token)?._doc
        // localStorage.setItem("pfp", userData.profile_picture)
        setUser(userData)
    }
    const logOut = () => {
        localStorage.clear()
        setUser(null)
        toaster("success", "You are signed out !")
        router.push('/')
    }
    return { updateUser, user, logOut }
}