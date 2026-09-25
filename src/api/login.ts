import { UserInputs } from "../utilities/types/userInterface";
import { productAxios } from "./interceptor";

export const LOGIN_USER = async(data:UserInputs)=>{
    return productAxios.post("user/login",data)

}