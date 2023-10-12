import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import useUser from './useUser';
import toaster from "@/utils/toast_function";
import axios from 'axios';

const currencies = ["AED", "SAR", "PKR"]
const useWallet = create(persist((set, get) => ({
    points: 0,
    currency: process.env.BASE_CURRENCY,
    exchange_rate: 1,
    walletLoading: false,
    setCurrency: (currency) => {
        if (currencies.includes(currency)) {
            set(() => ({ currency }))
            // location.reload()
        }
        else return toaster("error", "Invalid currency!")
    },
    setExchangeRate: (rate) => set(() => ({ exchange_rate: rate })),
    getUfBalance: async () => {
        const { user } = useUser.getState()
        set(() => ({ walletLoading: true }))
        try {
            const { data } = await axios.get(`${process.env.HOST}/api/user/uf-wallet/get-balance?user_id=${user._id}&card_number=${user.uf_wallet.card_number}`)
            set(() => ({ points: data.balance }))
        } catch (e) { console.log(e); toaster("error", e.response.data.msg) }
        set(() => ({ walletLoading: false }))
    },
    getUfHistory: async (setCallbackState) => {
        const { user } = useUser.getState()
        set(() => ({ walletLoading: true }))
        try {
            const { data } = await axios.get(`${process.env.HOST}/api/user/uf-wallet/get-points-history?user_id=${user._id}&card_number=${user.uf_wallet.card_number}`)
            if (setCallbackState) setCallbackState(data.history)
            set(() => ({ walletLoading: false }))
            return data.history
        } catch (e) { console.log(e); toaster("error", e.response.data.msg) }
        set(() => ({ walletLoading: false }))
    },

    getExchangeRate: async (to = get().currency, amount = 1) => {
        set(() => ({ walletLoading: true }))
        try {
            const { data } = await axios.get(`https://api.api-ninjas.com/v1/convertcurrency?want=${to}&have=${process.env.BASE_CURRENCY}&amount=${amount}`)
            set(() => ({ exchange_rate: data.new_amount, walletLoading: false }))
            console.log(data)
            return data.new_amount
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

        if (format.position === 'left') return `${format.symbol} ${Number.isInteger(price) ? price : price.toFixed(3)}`;
        else return `${Number.isInteger(price) ? price : price.toFixed(3)} ${format.symbol}`;
    }

}), { name: "wallet" }
))
export default useWallet