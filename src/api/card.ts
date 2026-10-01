import { productAxios } from "./interceptor";

export const GET_PRODUCT = async()=>{
    return productAxios.get("products",{withCredentials:true})

}

