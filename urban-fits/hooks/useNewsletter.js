import { useState, useEffect } from "react";
import toaster from "@/utils/toast_function";
import axios from "axios";
import jwt from 'jsonwebtoken';
import useUser from "./useUser";

export default function useNewsletter() {
    const { user } = useUser()

    const getInitialToken = () => {
        const token = jwt.decode(localStorage.getItem("user_newsletter_token"))
        if (token && token._doc && token._doc.user) return token._doc
        else return null
    }

    const [newsletterData, setNewsletterData] = useState(getInitialToken)
    const [letterLoading, setLetterLoading] = useState(false)

    useEffect(() => {
        const token = jwt.decode(localStorage.getItem("user_newsletter_token"))
        if (token && token._doc && token._doc.user) return setNewsletterData(token._doc)
        return async () => {
            if (!user) return setNewsletterData(null);
            setLetterLoading(true)
            if (user) {
                try {
                    const { data } = await axios.get(`${process.env.HOST}/api/newsletter/get?id=${user._id}`)
                    const { payload } = data
                    const decodedPaylod = jwt.decode(payload)
                    setNewsletterData(decodedPaylod)
                    return localStorage.setItem("user_newsletter_token", payload)
                } catch (error) {
                    console.log(error.response.data.success)
                    setNewsletterData(null)
                    return localStorage.setItem("user_newsletter_token", null)
                }
            }
            setLetterLoading(false)
        }
    }, [])

    const updateNewsletterData = async (valuesObj) => {
        const res = await axios.put(`${process.env.HOST}/api/newsletter/update?id=${user._id}`, valuesObj)
        const { payload } = res.data

        toaster(res.data.success ? "success" : "error", res.data.msg)
        localStorage.setItem("user_newsletter_token", payload)

        const decodedPaylod = jwt.decode(payload)?._doc
        console.log(decodedPaylod)
        setNewsletterData(decodedPaylod)
    }

    return { newsletterData, updateNewsletterData, letterLoading }
}