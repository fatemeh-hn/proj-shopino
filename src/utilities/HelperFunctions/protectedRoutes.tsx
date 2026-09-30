import Cookies from "js-cookie";
import {Navigate} from "react-router"

function ProtectedRoute({element} : {element:React.ReactElement}){
    const token = Cookies.get("token");
    return token ? element : <Navigate to="/login" replace />

}

export default ProtectedRoute