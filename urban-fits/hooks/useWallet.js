import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import useUser from './useUser';
import toaster from "@/utils/toast_function";
import axios from 'axios';

const useWallet = create(persist((set, get) => ({
    points: 0,
    walletLoading: false,
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
    }
}), { name: "authToken" }
))
export default useWallet