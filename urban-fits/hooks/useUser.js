import { useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import toaster from "@/utils/toast_function";
import jwt from 'jsonwebtoken';

export default function useUser() {
    const router = useRouter()
    const {emptyCart} = useCart()
    const getInitialToken = () => {
        const token = jwt.decode(localStorage.getItem("authToken"))
        if (token && token._doc && token._doc.email) return token._doc
        else return null
    }
    const [user, setUser] = useState(getInitialToken)

    const updateUser = async (valuesObj, initUser=false) => {
        if (initUser) {
            localStorage.setItem("authToken", valuesObj)
            const userData = jwt.decode(valuesObj)?._doc
            setUser(userData)
        }
        else {
            const response = await fetch(`${process.env.HOST}/api/user/update?id=${user._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(valuesObj)
            })
            const res = await response.json()
            toaster(res.success ? "success" : "error", res.msg)
            localStorage.setItem("authToken", res.payload)
            const userData = jwt.decode(res.payload)?._doc
            setUser(userData)
        }
    }
    const logOut = () => {
        router.push('/')
        localStorage.clear()
        setUser(null)
        emptyCart()
        toaster("success", "You are signed out !")
    }
    return { updateUser, user, logOut }
}