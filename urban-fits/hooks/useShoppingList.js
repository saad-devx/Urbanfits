import { create } from 'zustand'
import useUser from './useUser';
import toaster from "@/utils/toast_function";
import axios from "axios";
import jwt from 'jsonwebtoken';

const useShoppingList = create((set) => ({
    lists: null,
    listLoading: false,
    getShoppingLists: async () => {
        const { user } = useUser.getState()
        if (!user) return

        set(() => ({ listLoading: true }))
        try {
            const { data } = await axios.get(`${process.env.HOST}/api/user/shopping-list/get-lists?user_id=${user._id}`)
            set(() => ({ lists: data.shoppinglists }))
        } catch (error) {
            console.log(error)
            if (error.response) toaster("error", error.response.data.msg)
        }
        set(() => ({ listLoading: false }))
    },

    createShoppingList: async (listname) => {
        const { user } = useUser.getState()
        if (!user) return

        set(() => ({ listLoading: true }))
        try {
            const { data } = await axios.post(`${process.env.HOST}/api/user/shopping-list/create?id=${user._id}&name=${listname}`)
            set((state) => ({ lists: [...state.lists, data.shoppinglist] }))
            toaster("success", data.msg)
        } catch (error) {
            console.log(error)
            if (error.response) toaster("error", error.response.data.msg)
        }
        set(() => ({ listLoading: false }))
    },

    updateNewsletterData: async (valuesObj, sendRequest = true) => {
        const { user } = useUser.getState()
        if (sendRequest) {
            try {
                const { data } = await axios.put(`${process.env.HOST}/api/newsletter/update?id=${user._id}`, valuesObj)
                toaster("success", data.msg)
                const decodedData = jwt.decode(data.payload)?._doc
                delete decodedData._id;
                delete decodedData.user;
                set(() => ({ newsletterData: decodedData }))
                return decodedData
            } catch (error) {
                console.log(error)
                return toaster("error", error.response.data.msg)
            }
        }
        else if (!sendRequest) {
            const decodedData = jwt.decode(valuesObj)?._doc
            set(() => ({ newsletterData: decodedData }))
            return decodedData
        }
    }

}))
export default useShoppingList