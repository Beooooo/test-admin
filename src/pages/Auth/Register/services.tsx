import { IFormRegister } from "."
import axiosClient from "../../../utils/axiosClient"

export const registerCompany = async (data: IFormRegister) => {
    const res = await axiosClient.post('/auth/company/register', data)
    return res
}