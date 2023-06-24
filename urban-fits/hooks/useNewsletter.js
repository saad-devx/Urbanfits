import { useState } from "react";
import toaster from "@/utils/toast_function";
import axios from "axios";
import jwt from 'jsonwebtoken';
import useUser from "./useUser";

export default function useNewsletter() {
    const { user } = useUser()

    const getInitialToken = () => {
        const token = jwt.decode(localStorage.getItem("user_newsletter_token"))
        if (token && token._doc && token._doc.user) { console.log(token._doc); return token._doc }
        else return null
    }

    const [newsletterData, setNewsletterData] = useState(getInitialToken)
    const [letterLoading, setLetterLoading] = useState(false)

    const getNewsletterData = async () => {
        if (!user) return setNewsletterData(null);
        if (user) {
            try {
                const { data } = await axios.get(`${process.env.HOST}/api/newsletter/get?id=${user._id}`)
                const { payload } = data
                const decodedPayload = jwt.decode(payload)
                setNewsletterData(decodedPayload)
                return localStorage.setItem("user_newsletter_token", payload)
            } catch (error) {
                setNewsletterData(null)
                localStorage.setItem("user_newsletter_token", null)
            }
        }
        setLetterLoading(false)
    }

    const updateNewsletterData = async (valuesObj, sendRequest = true) => {
        if (sendRequest) {
            setLetterLoading(true)
            try {
                const res = await axios.put(`${process.env.HOST}/api/newsletter/update?id=${user._id}`, valuesObj)
                const { payload } = res.data
                toaster("success", res.data.msg)
                localStorage.setItem("user_newsletter_token", payload)
                const decodedPayload = jwt.decode(payload)?._doc
                setNewsletterData(decodedPayload)
            } catch (error) {
                console.log(error)
                toaster("error", error.response.data.msg)
            }
            return setLetterLoading(false)
        }
        else if (!sendRequest) {
            localStorage.setItem("user_newsletter_token", valuesObj)
            const decodedPayload = jwt.decode(valuesObj)?._doc
            return setNewsletterData(decodedPayload)
        }
    }

    return { newsletterData, getNewsletterData, updateNewsletterData, letterLoading }
}