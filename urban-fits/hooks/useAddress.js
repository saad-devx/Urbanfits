import { useState } from "react";
import useUser from "./useUser";
import jwt from 'jsonwebtoken'
import toaster from "@/utils/toast_function";

export default function useAddress() {
    const { user } = useUser()

    const getAddressFromLS = () => {
        const address = jwt.decode(localStorage.getItem('addressToken'))
        if (address && address._doc) return address._doc
        else return null
    }
    const [address, setAddress] = useState(getAddressFromLS)
    const getAddress = async () => {
        const res = await fetch(`${process.env.HOST}/api/user/addresses/get?user_id=${user._id}`)
        let address = await res.json()
        localStorage.setItem("addressToken", address.payload)
        const decodedAddress = jwt.decode(address.payload)
        setAddress(decodedAddress._doc)
        return decodedAddress._doc
    }

    const updateAddress = async (values) => {
        try {
            let response = await fetch(`${process.env.HOST}/api/user/addresses/update?user_id=${user._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            })
            let res = await response.json()
            if (!res.success) toaster("error", res.msg)
            if (res.success) toaster("success", res.msg)
            if (!res.payload) return
            const address = jwt.decode(res.payload)
            setAddress(address)
            localStorage.setItem("addressToken", res.payload)
        }
        catch (e) {
            console.log(e)
            return toaster("error", "We're sorry some error has occurred, we'll fix it soon")
        }
    }

    const initiateAddress = async (payload, router) => {
        let user_id = jwt.decode(payload)._doc._id
        if (router.pathname === "/signup") {
            let address = await fetch(`${process.env.HOST}/api/user/addresses/create?user_id=${user_id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })
            let parsedAddress = await address.json()
            localStorage.setItem("addressToken", parsedAddress.payload)
        }
        else if (router.pathname === "/login") {
            let address = await fetch(`${process.env.HOST}/api/user/addresses/get?user_id=${user_id}`)
            let parsedAddress = await address.json()
            localStorage.setItem("addressToken", parsedAddress.payload)
        }
        else return
    }

    return { address, initiateAddress, updateAddress, getAddress }
}