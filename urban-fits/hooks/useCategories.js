import { create } from 'zustand'
import toaster from "@/utils/toast_function";
import axios from "axios";
import getUser_LS from '@/utils/getUserfromLS';

const useCategories = create((set, get) => ({

    categories: [],
    categLoading: false,

    getCategories: async () => {
        console.log("entry point 2")
        const user = getUser_LS()
        if (!user) return
        console.log("entry point 3")

        set(() => ({
            categLoading: true
        }))
        console.log("entry point 4")
        console.log("host is", process.env.HOST)
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
        if (!user || user.role === "customer") return

        set(() => ({
            categLoading: true
        }))
        try {
            const { data } = await axios.post(`${process.env.HOST}/api/categories/create?id=${user._id}`, category)
            set(() => (
                { categories: data.categories }
            ))
            toaster("success", data.msg)
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            categLoading: false
        }))
    },

    updateCategory: async (update) => {
        const user = getUser_LS()
        if (!user || user.role === "customer") return

        set(() => ({
            categLoading: true
        }))
        try {
            const { data } = await axios.put(`${process.env.HOST}/api/categories/update?id=${user._id}`, update)
            set(() => (
                { categories: data.categories }
            ))
            toaster("success", data.msg)
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            categLoading: false
        }))
    },

    deleteCategories: async (categoriesToDelete) => {
        const user = getUser_LS()
        if (!user || user.role === "customer") return

        set(() => ({
            categLoading: true
        }))
        try {
            const { data } = await axios.put(`${process.env.HOST}/api/categories/delete?id=${user._id}`, { categories: categoriesToDelete })
            set(() => (
                { categories: data.categories }
            ))
            toaster(data.deletedCount < 1 ? "info" : "success", data.msg)
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