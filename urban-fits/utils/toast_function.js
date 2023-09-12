import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function toaster(type, msg) {
    toast(msg, {
        position: "top-left",
        style: {
            borderRadius: "100px"
        },
        bodyStyle: {
            fontFamily: 'urbanist',
            fontSize: "14px",
            fontWeight: "500",
            color: "white"
        },
        closeButton: false,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type,
        progress: undefined,
        theme: "dark",
        transition: Slide
    })
}