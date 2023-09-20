import { create } from 'zustand'
import toaster from "@/utils/toast_function";
import axios from "axios";
import useUser from './useUser';

const useCategories = create((set, get) => ({

    categories: [],
    categLoading: false,

    getCategories: async () => {
        const { user } = useUser.getState()
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
    }

}))

export default useCategories