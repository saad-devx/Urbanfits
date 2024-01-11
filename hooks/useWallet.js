import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import useUser from './useUser';
import toaster from "@/utils/toast_function";
import axios from 'axios';

const currencies = ["AED", "SAR", "PKR"]
const useWallet = create(persist((set, get) => ({
    points: 0,
    currency: process.env.NEXT_PUBLIC_BASE_CURRENCY,
    currency_selected_by_user: false,
    exchange_rate: 1,
    walletLoading: false,
    setCurrency: (currency) => {
        if (currencies.includes(currency)) set(() => ({ currency }))
        else return toaster("error", "Invalid currency!")
    },
    setCurrency_selected_by_user: (bool) => set(() => ({ currency_selected_by_user: bool })),
    setExchangeRate: (rate) => set(() => ({ exchange_rate: rate })),
    getUfBalance: async () => {
        const { user } = useUser.getState()
        if (!user) return
        set(() => ({ walletLoading: true }))
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/user/uf-wallet/get-balance?user_id=${user._id}&card_number=${user.uf_wallet.card_number}`)
            set(() => ({ points: data.balance }))
        } catch (e) { console.log(e); toaster("error", e.response.data.msg) }
        set(() => ({ walletLoading: false }))
    },

    getUfHistory: async (callback, limit = 150) => {
        const { user } = useUser.getState()
        if (!user) return
        set(() => ({ walletLoading: true }))
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/user/uf-wallet/get-points-history?user_id=${user._id}&card_number=${user.uf_wallet.card_number}${limit ? "&limit=" + limit : ''}`)
            callback ? callback(data.history) : null
            return data.history
        } catch (e) {
            console.log(e);
            if (e.response) toaster("error", e.response.data.msg)
            else toaster("error", "Network error.")
        } finally { set(() => ({ walletLoading: false })) }
    },

    getWeeklyCheckinHistory: async (setCallbackState) => {
        const { user } = useUser.getState()
        if (!user) return
        set(() => ({ walletLoading: true }))
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/user/uf-wallet/get-weekly-points-history?user_id=${user._id}&card_number=${user.uf_wallet.card_number}`)
            if (setCallbackState) setCallbackState(data.history)
            set(() => ({ walletLoading: false }))
            return data.history
        } catch (e) { console.log(e); toaster("error", e.response.data.msg) }
        set(() => ({ walletLoading: false }))
    },

    spinUfWheel: async () => {
        const { user, updateUser } = useUser.getState()
        if (!user) return
        set(() => ({ walletLoading: true }))
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/user/uf-wallet/spin-wheel?user_id=${user._id}&card_number=${user.uf_wallet.card_number}`)
            set(() => ({ walletLoading: false }))
            console.log(data)
            await updateUser({
                ...user,
                uf_wallet: {
                    ...user.uf_wallet,
                    last_uf_spin: data.last_uf_spin,
                    last_spin_reward: data.reward,
                    ...(data.next_uf_spin ? { next_uf_spin: data.next_uf_spin } : {})
                }
            }, true, true)
            get().getUfBalance()
            return data
        } catch (e) { console.log(e); toaster("error", e.response.data.msg) }
        set(() => ({ walletLoading: false }))
    },

    getExchangeRate: async (to = get().currency) => {
        if (to === "AED") {
            set(() => ({ exchange_rate: 1, walletLoading: false }))
            return 1
        }
        set(() => ({ walletLoading: true }))
        try {
            const { data } = await axios.get(`https://api.fastforex.io/fetch-one?api_key=${process.env.NEXT_PUBLIC_CURRENCY_API_KEY}&from=${process.env.NEXT_PUBLIC_BASE_CURRENCY}&to=${to}`)
            set(() => ({ exchange_rate: data.result[to] }))
            return data.result[to]
        } catch (error) {
            console.log(error);
            let fallbackRate = 1;
            if (to === "PKR") fallbackRate = 77.6;
            else if (to === "SAR") fallbackRate = 1.02;
            set(() => ({ exchange_rate: fallbackRate }))
            return fallbackRate
        } finally { set(() => ({ walletLoading: false })) }
    },

    getShippingRates: async (callback, shippingMethod = "standard_shipping") => {
        set(() => ({ walletLoading: true }))
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/get-shipping-rates`)
            set(() => ({ walletLoading: false }))
            console.log(data)

            const { shipping_rates } = data
            const { country } = useUser.getState()
            let price = 0
            let additionalKgCharges = 0
            if (country.country === "sa") {
                price = shipping_rates[shippingMethod].ksa_rate;
                additionalKgCharges = shipping_rates[shippingMethod].additional_kg_charge.ksa
            }
            else if (country.country === "ae") {
                price = shipping_rates[shippingMethod].uae_rate;
                additionalKgCharges = shipping_rates[shippingMethod].additional_kg_charge.uae
            }
            else if (country.country === "pk") {
                price = shipping_rates[shippingMethod].pk_rate;
                additionalKgCharges = shipping_rates[shippingMethod].additional_kg_charge.pk
            }
            const getTimeSpan = (shippingMethod) => {
                const shippingData = shipping_rates[shippingMethod]
                if (country.country === "sa") return shippingData.shipping_timespan.ksa_shipping
                else if (country.country === "ae") return shippingData.shipping_timespan.uae_shipping
                else if (country.country === "pk") return shippingData.shipping_timespan.pk_shipping
            }
            callback({ price, getTimeSpan, additionalKgCharges, shipping_rates })
            return { price, getTimeSpan, additionalKgCharges, shipping_rates }

        } catch (error) { console.log(error); }
        set(() => ({ walletLoading: false }))
    },

    formatPrice: (amount = 0, currency = get().currency, rate = get().exchange_rate) => {
        if (!currencies.includes(currency)) return toaster("error", "Currency conversion failed. Invalid currency!")
        const currencyFormats = {
            "AED": { symbol: 'د.إ', position: 'left' },
            "SAR": { symbol: '﷼', position: 'right' },
            "PKR": { symbol: 'Rs.', position: 'left' }
        };
        const format = currencyFormats[currency];
        const price = amount * rate;

        if (format.position === 'left') return `${format.symbol} ${Number.isInteger(price) ? price : price.toFixed(3).replace(/\.?0+$/, '')}`;
        else return `${Number.isInteger(price) ? price : price.toFixed(3).replace(/\.?0+$/, '')} ${format.symbol}`;
    },

    formatPriceNum: (amount = 0, currency = get().currency, rate = get().exchange_rate) => {
        if (!currencies.includes(currency)) return toaster("error", "Currency conversion failed. Invalid currency!")
        const price = amount * rate;
        return price.toFixed(3).replace(/\.?0+$/, '')
    }

}), { name: "wallet" }
))
export default useWallet