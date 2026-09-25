import axios from 'axios';

export const productAxios = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },

})

productAxios.interceptors.response.use(
    (response) => (response),

  (error)=>{
    if(error.response?.status===401){
        console.log("unAuthorized");
    }

    if(error.response?.status===500){
        console.log("server Error");
    }

    if(error.response?.status===400){
        console.log("not found");
    }

    return Promise.reject(error)
  }
);