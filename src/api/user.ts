import { productAxios } from "./interceptor";

export const GET_USER = async()=>{
    return productAxios.get("auth/me",{withCredentials:true})

}