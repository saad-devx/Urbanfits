import { create } from 'zustand'
import toaster from "@/utils/toast_function";
import axios from "axios";
import getUser_LS from '@/utils/getUserfromLS';

const useProduct = create((set, get) => ({

    products: [],
    productLoading: false,
    currentPage: 1,
    totalPages: 1,
    totalProducts: 0,
    selectedProducts: [],
    setSelectedProducts: (newArray) => set(() => ({ selectedProducts: newArray })),

    getProducts: async (page = 1, category_id = null) => {
        set(() => ({
            productLoading: true
        }))
        try {
            if (category_id) {
                const { data } = await axios.get(`${process.env.HOST}/api/products/get/bycategory?id=${category_id}&page=${page}`)
                set(() => (
                    {
                        products: data.products,
                        totalPages: data.totalPages,
                        currentPage: data.currentPage,
                        totalProducts: data.totalProducts
                    }
                ))
            }
            else {
                const { data } = await axios.get(`${process.env.HOST}/api/products/get/many?page=${page}`)
                set(() => (
                    {
                        products: data.products,
                        totalPages: data.totalPages,
                        currentPage: data.currentPage,
                        totalProducts: data.totalProducts
                    }
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
    },
    
    createProduct: async (productsToDelete) => {
        const user = getUser_LS()
        if (!user) return

        set(() => ({
            productLoading: true
        }))
        try {
            const { data } = await axios.put(`${process.env.HOST}/api/products/delete?id=${user._id}`, productsToDelete)
            await get().getProducts(1)
            toaster(data.deletedCount < 1 ? "info" : "success", data.msg)
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