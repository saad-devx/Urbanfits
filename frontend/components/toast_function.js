import { toast, Slide } from 'react-toastify';
export default function toaster (type, msg) {
    toast(msg, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: type,
        progress: undefined,
        theme: "colored",
        transition: Slide
    })
}