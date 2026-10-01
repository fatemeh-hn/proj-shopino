import { productAxios } from "./interceptor";

export const GET_PRODUCT = async()=>{
    return productAxios.get("products",{withCredentials:true})

}

// export const ADD_PRODUCT = async(data)=>{
//     return productAxios.post("products/add",data,{withCredentials:true})

// }

