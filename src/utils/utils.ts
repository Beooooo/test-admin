import { toast } from "react-toastify";

export enum ETypeToast {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}

const options: any = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false
}

export const ToastMessage = (type: ETypeToast, message?: string) => {
    if (type === ETypeToast.SUCCESS) {
        return toast.success(message, options)
    }

    if (type === ETypeToast.ERROR) {
        return toast.error(message, options)
    }

    return toast.error("message", options)
}

const capitalizeFirstLetter = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
}

export const convertCase = (text: string) => {
    const lowercase = text.toLowerCase().replaceAll("_", " ")
    return capitalizeFirstLetter(lowercase)
}