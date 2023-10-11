import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/login.jsx";
import  {ProductsAPI}  from "./components/products/products.jsx";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/products" element={<ProductsAPI />} /> 
      </Routes>
    </BrowserRouter>
  );
}


