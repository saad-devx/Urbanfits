import useWallet from "@/hooks/useWallet";
import toaster from "./toast_function";
const { currency, exchange_rate } = useWallet.getState()

const formatPrice = (amount = 0, curr = currency, rate = exchange_rate) => {
    if (!["AED", "SAR", "PKR"].includes(curr)) return toaster("error", "Currency conversion failed. Invalid currency!")
    const currencyFormats = {
        "AED": { symbol: 'د.إ', position: 'left' },
        "SAR": { symbol: '﷼', position: 'right' },
        "PKR": { symbol: '₨', position: 'left' }
    };
    const format = currencyFormats[curr];
    const price = amount * rate;

    if (format.position === 'left') return `${format.symbol} ${Number.isInteger(price) ? price : price.toFixed(3)}`;
    else return `${Number.isInteger(price) ? price : price.toFixed(3)} ${format.symbol}`;
}

export default formatPrice