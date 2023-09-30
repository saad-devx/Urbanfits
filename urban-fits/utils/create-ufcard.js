import User from "@/models/user"
import UFpoints from "@/models/ufpoints"
import { generateRandomInt } from "./generatePassword"
import uploadImage from "./uploadImage";
import bwipjs from 'bwip-js';

const createUFcard = async () => {
    let cardNumber = null
    let exists = true
    while (exists) {
        const timestamp = Date.now()
        const salt = generateRandomInt(1000, 9999)
        cardNumber = `705${timestamp}${salt}`

        const ufPointDoc = await User.findOne({ 'uf_wallet.card_number': cardNumber })
        if (!ufPointDoc) exists = false;
    }
    try {
        const buffer = await bwipjs.toBuffer({
            bcid: "code128",
            text: cardNumber,
            scale: 3,
        })
        const barCode = buffer.toString("base64");
        const barCodeUrl = await uploadImage(barCode, cardNumber, "uf-wallet-barcodes")
        return {
            card_number: cardNumber,
            bar_code: barCodeUrl,
            points: 100
        }
    } catch (error) { console.log(error) }
}
export default createUFcard