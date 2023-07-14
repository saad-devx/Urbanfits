import { create } from 'zustand'
import toaster from "@/utils/toast_function";
import axios from "axios";
import getUser_LS from '@/utils/getUserfromLS';

const useCategories = create((set, get) => ({

    categories: [],
    categLoading: false,

    getCategories: async () => {
        const user = getUser_LS()
        if (!user) return

        set(() => ({
            categLoading: true
        }))
        try {
            const { data } = await axios.get(`${process.env.HOST}/api/categories/get?id=${user._id}`)
            set(() => (
                { categories: data.categories }
            ))
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            categLoading: false
        }))
    },

    createCategory: async (category) => {
        const user = getUser_LS()
        if (!user) return

        set(() => ({
            categLoading: true
        }))
        try {
            const { data } = await axios.post(`${process.env.HOST}/api/categories/create?id=${user._id}`, category)
            set(() => (
                { categories: data.categories }
            ))
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            categLoading: false
        }))
    }

}))

export default useCategories