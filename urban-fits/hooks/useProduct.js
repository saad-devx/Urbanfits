import { create } from 'zustand'
import useUser from './useUser';
import toaster from "@/utils/toast_function";
import axios from "axios";

const useProduct = create((set, get) => ({

    products: [],
    productLoading: false,
    totalProducts: 0,

    getProducts: async (page = 1, category_id = null) => {
        set(() => ({
            productLoading: true
        }))
        try {
            if (category_id) {
                console.log(page, category_id)
                const { data } = await axios.get(`${process.env.HOST}/api/products/get/bycategory?id=${category_id}&page=${page}`)
                set(() => ({
                    products: data.products,
                    totalProducts: data.totalProducts,
                    productLoading: false
                }))
                return data.products
            }
            else {
                const { data } = await axios.get(`${process.env.HOST}/api/products/get/many?page=${page}`)
                set(() => ({
                    products: data.products,
                    totalProducts: data.totalProducts,
                    productLoading: false
                }))
                return data.products
            }
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            productLoading: false
        }))
    },

    getOneProduct: async (product_id) => {
        set(() => ({
            productLoading: true
        }))
        try {
            const { data } = await axios.get(`${process.env.HOST}/api/products/get/one?id=${product_id}`)
            set(() => ({
                productLoading: false
            }))
            return data.product
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