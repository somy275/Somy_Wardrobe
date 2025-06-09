import { toast, Bounce, ToastContainer } from "react-toastify"
export const Online = () => {  // this function run when the user in online
    toast.success("You are Online", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
}

export const Offline = () => {  // this function run when the user in offline
    toast.error("You are Offline", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });

}


