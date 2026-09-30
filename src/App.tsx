import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import GlobalSnackbar from "./components/card/GlobalSnackbar";
import ProtectedRoute from "./utilities/HelperFunctions/protectedRoutes";
import Profile from "./pages/Profile";


function App() {
  return(
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/profile" element={<ProtectedRoute element={<Profile/>} />} />
    </Routes>
    <GlobalSnackbar/>
  
    </>
  
 
)}

export default App;
