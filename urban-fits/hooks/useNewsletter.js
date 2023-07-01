import { create } from 'zustand'
import toaster from "@/utils/toast_function";
import getUser_LS from '@/utils/getUserfromLS';
import axios from "axios";
import jwt from 'jsonwebtoken';

const useNewsletter = create((set, get) => ({

    newsletterData: null,

    user: () => {
        const token = jwt.decode(localStorage.getItem("authToken"))
        if (token && token._doc && token._doc.email) return token._doc
        else return null
    },

    getNewsletterData: async () => {
        const user = get().user()
        if (!user) return

        const token = jwt.decode(localStorage.getItem("user_newsletter_token"))
        if (token && token._doc && token._doc.user) return set((state) =>
            ({ newsletterData: token._doc })
        )
        try {
            const { data } = await axios.get(`${process.env.HOST}/api/newsletter/get?id=${user._id}`)
            const { payload } = data
            const decodedPayload = jwt.decode(payload)?._doc
            localStorage.setItem("user_newsletter_token", payload)
            return set((state) =>
                ({ newsletterData: decodedPayload })
            )
        } catch (error) {
            console.log(error)
            localStorage.setItem("user_newsletter_token", null)
            return set((state) =>
                ({ newsletterData: null })
            )
        }
    },

    updateNewsletterData: async (valuesObj, sendRequest = true) => {
        const user = get().user()
        if (sendRequest) {
            try {
                const res = await axios.put(`${process.env.HOST}/api/newsletter/update?id=${user._id}`, valuesObj)
                const { payload } = res.data
                toaster("success", res.data.msg)
                localStorage.setItem("user_newsletter_token", payload)
                const decodedPayload = jwt.decode(payload)?._doc
                set((state) =>
                    ({ newsletterData: decodedPayload })
                )
                return decodedPayload
            } catch (error) {
                console.log(error)
                toaster("error", error.response.data.msg)
            }
        }
        else if (!sendRequest) {
            localStorage.setItem("user_newsletter_token", valuesObj)
            const decodedPayload = jwt.decode(valuesObj)?._doc
            set((state) =>
                ({ newsletterData: decodedPayload })
            )
            return decodedPayload
        }
    },

    clearNewsletterData: ()=>{
        set((state) => (
            {newsletterData: null}
        ))
    }
}))
export default useNewsletter