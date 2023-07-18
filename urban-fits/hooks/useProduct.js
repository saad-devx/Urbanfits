import { create } from 'zustand'
import toaster from "@/utils/toast_function";
import axios from "axios";
import getUser_LS from '@/utils/getUserfromLS';

const useProduct = create((set, get) => ({

    products: [],
    productLoading: false,

    getProducts: async (category_id = null) => {
        set(() => ({
            productLoading: true
        }))
        try {
            if (category_id) {
                const { data } = await axios.get(`${process.env.HOST}/api/products/get/bycategory?id=${category_id}`)
                set(() => (
                    { products: data.products }
                ))
            }
            else {
                const { data } = await axios.get(`${process.env.HOST}/api/products/get/many`)
                set(() => (
                    { products: data.products }
                ))
            }
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            productLoading: false
        }))
    },

    createProduct: async (category) => {
        const user = getUser_LS()
        if (!user) return

        set(() => ({
            productLoading: true
        }))
        try {
            const { data } = await axios.post(`${process.env.HOST}/api/products/create?id=${user._id}`, category)
            set(() => (
                { products: data.products }
            ))
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            productLoading: false
        }))
    }

}))

export default useProduct