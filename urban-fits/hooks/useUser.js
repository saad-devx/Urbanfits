import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { signOut } from "next-auth/react"
import useNewsletter from './useNewsletter';
import { useCart } from 'react-use-cart';
import toaster from "@/utils/toast_function";
import axios from 'axios';
import jwt from 'jsonwebtoken';

const useUser = create(persist((set, get) => ({
    user: null,
    wishList: [],
    country: {
        code: '+971',
        country: 'ae',
        name: 'United Arab Emirates',
        src: "https://urban-fits.s3.eu-north-1.amazonaws.com/country-flags/AE.jpg"
    },
    setCountry: (value) => set(() => ({ country: value })),
    addToWishList: (item) => set((state) => {
        return { wishList: [...state.wishList, item] }
    }),
    removeFromWishList: (itemToRemove) => {
        set((state) => {
            const wishListArray = state.wishList
            const index = wishListArray.indexOf(itemToRemove);
            if (index !== -1) wishListArray.splice(index, 1);
            return { wishList: wishListArray }
        })
    },
    inWishList: (item) => {
        let isInList = get().wishList.includes(item)
        return isInList
    },
    updateUser: async (valuesObj, updateLocally = false) => {
        if (updateLocally) {
            const userData = jwt.decode(valuesObj)?._doc
            delete userData.password
            set(() => ({ user: userData }))
        }
        else {
            try {
                const { data } = await axios.put(`${process.env.HOST}/api/user/update?id=${get().user._id}`, valuesObj)
                const userData = jwt.decode(data.payload)?._doc
                delete userData.password
                set(() => ({ user: userData }))
                toaster("success", data.msg)
            } catch (error) {
                console.log(error)
                toaster("error", error.response.data.msg)
            }
        }
    },
    logOut: () => {
        const { clearNewsletterData } = useNewsletter.getState()
        localStorage.clear()
        window.location.href = '/'
        clearNewsletterData()
        if (get().user.register_provider !== "urbanfits") signOut()
        set(() => ({ user: null }))
        toaster("success", "You are signed out !")
        sessionStorage.clear()
    }
}),
    { name: "authToken" }
))
export default useUser