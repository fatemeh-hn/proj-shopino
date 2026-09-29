import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import GlobalSnackbar from "./components/card/GlobalSnackbar";


function App() {
  return(
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
       
    </Routes>
    <GlobalSnackbar/>
  
    </>
  
 
)}

export default App;
