import axios from 'axios';
import { showSnackbar } from './snackbarNotifications';

export const productAxios = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },

})

productAxios.interceptors.response.use(
    (response) => (response),

    (error) => {
        const status = error.response?.status;
        console.log(status);
        if (!status) {
            showSnackbar("Unable to reach the server. Check your connection and try again.", "error");
        }else if (status === 401){
            showSnackbar("Unauthorized. Please sign in again.", "error");
        }else if (status === 404){
            showSnackbar("Not found.", "error");
        }else if (status >= 500){
            showSnackbar("Server error. Please try again later", "error");
        }else if (status >= 400){
            showSnackbar("Request failed. Please check your input and try again.", "error");
        }
    


        return Promise.reject(error);
    }
);