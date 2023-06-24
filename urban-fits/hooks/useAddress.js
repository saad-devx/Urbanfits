import { useState } from "react";
import useUser from "./useUser";
import jwt from 'jsonwebtoken'
import axios from "axios";
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
        if (!user) return
        try {
            const res = await axios.get(`${process.env.HOST}/api/user/addresses/get?user_id=${user._id}`)
            const { payload } = res.data
            localStorage.setItem("addressToken", payload)
            const { _doc } = jwt.decode(payload)
            if (!_doc) return null
            setAddress(_doc)
            return _doc
        } catch (err) {
            console.log(err.response.data.msg)
            return null
        }
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

    return { address, updateAddress, getAddress }
}