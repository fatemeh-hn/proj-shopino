import { productAxios } from "./interceptor";

export const GET_PRODUCT_DETAIL = async(id:string)=>{
    return productAxios.get(`products/${id}`,{withCredentials:true})

}

