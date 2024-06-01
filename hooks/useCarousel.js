import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import toaster from "@/utils/toast_function";
import axios from "axios";

const useCarousel = create(persist((set, get) => ({
    homeSlides: [],
    catalogueSlides: [],
    indexContent: null,
    refreshAfter: null,
    carouselLoading: false,
    indexLoading: false,

    getHomeSlides: async (callback) => {
        const { refreshAfter } = get();
        if (refreshAfter && Date.now() < new Date(refreshAfter).getTime()) return console.log("carousel request cancelled.");
        try {
            console.log("making carousel request.");
            set(() => ({ carouselLoading: true }))
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/carousels/home/get`);
            set(() => ({ homeSlides: data.carousel.slides, refreshAfter: new Date(new Date().getTime() + 5 * 60000) }));
            if (callback) callback(data.carousel.slides);
        } catch (error) {
            console.log(error)
            toaster("error", error?.response?.data?.msg || "Network Error")
        } finally { set(() => ({ carouselLoading: false })) }
    },

    getCatalogueSlides: async (callback) => {
        try {
            set(() => ({ carouselLoading: true }))
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/carousels/catalogue/get`);
            set(() => ({ catalogueSlides: data.carousel.slides }))
            if (callback) callback(data.carousel.slides)
        } catch (error) {
            console.log(error)
            toaster("error", error?.response?.data?.msg || "Network Error")
        } finally { set(() => ({ carouselLoading: false })) }
    },

    getIndexContent: async (callback) => {
        const { refreshAfter, homeSlides } = get();
        if (homeSlides.length && refreshAfter && new Date().getTime() < new Date(refreshAfter).getTime()) return console.log("index content request cancelled.");
        try {
            console.log("making index content request.");
            set(() => ({ indexLoading: true }))
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/get-index-content`);
            set(() => ({ indexContent: data, refreshAfter: new Date(new Date().getTime() + 5 * 60000) }))
            if (callback) callback(data)
        } catch (error) {
            console.log(error)
            toaster("error", error?.response?.data?.msg || "Network Error")
        } finally { set(() => ({ indexLoading: false })) }
    },

}), {
    name: "carousel&index-content",
    partialize: (state) => ({
        indexContent: state.indexContent,
        refreshAfter: state.refreshAfter,
        homeSlides: state.homeSlides,
        catalogueSlides: state.catalogueSlides
    })
}))

export default useCarousel;