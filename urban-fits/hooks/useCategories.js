import { create } from 'zustand'
import toaster from "@/utils/toast_function";
import axios from "axios";

const useCategories = create((set, get) => ({

    categories: [],
    categLoading: false,
    getCategories: async () => {
        set(() => ({ categLoading: true }))
        try {
            const { data } = await axios.get(`${process.env.HOST}/api/categories/get?populate_parents=false`)
            set(() => (
                { categories: data.categories }
            ))
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({ categLoading: false }))
    }

}))

export default useCategories