import { useState } from "react";
import jwt from 'jsonwebtoken';

export default function useUser () {
    const getInitialToken = ()=>{
        const token = jwt.decode(localStorage.getItem("authToken"))
        if (token && token._doc && token._doc.email) return token._doc
        else return null
    }
    const [user, setUser] = useState(getInitialToken)

    const updateUser = (token) => {
        localStorage.setItem("authToken", token)
        const userData = jwt.decode(token)?._doc
        setUser(userData)
    }
    return { updateUser, user }
}