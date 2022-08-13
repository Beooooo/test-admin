import { IFormLogin } from ".";
import axiosClient from "../../../utils/axiosClient";

export const loginAdmin = async (data: IFormLogin) => {
    const res = await axiosClient.post('/admin/login', data)
    return res
}