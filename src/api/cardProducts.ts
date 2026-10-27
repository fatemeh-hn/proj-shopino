import { productAxios } from "./interceptor";

export const GET_PRODUCT = async ({ pageParam = 0 }) => {
    const response = await productAxios.get(`products?limit=30&skip=${pageParam}`,
        { withCredentials: true }
    );

    return response.data;
};

// export const ADD_PRODUCT = async(data)=>{
//     return productAxios.post("products/add",data,{withCredentials:true})

// }

