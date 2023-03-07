import Loader from "./loader";
import toaster from "../utils/toast_function";

export default async function onsubmitFunc(setLoader, callback){
    setLoader(<Loader/>)
    try{
        callback()
    }
    catch(e){
        cosnole.log(e)
        setLoader(false)
        toaster("error", "Oh Snap! An error occurred, try again later")
    }
}