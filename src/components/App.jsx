import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import { Context } from "../api/index";
import Register from "./Login/Register";
import Login from "./Login/Login";
import Products from "./Products/AllProducts";
import SingleProducts from "./Products/SingleProduct";
import { AboutUs } from "./AboutUs.jsx/AboutUs";
import { ContactUs } from "./ContactUs.jsx/ContactUS";
import Category from "./Products/Category";
import Cart from "./Cart/Cart";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <div className="App">
      <Context>
        <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SingleProducts/:id" element={<SingleProducts />} />
        <Route path="/category/:categoryname" element={<Category />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Products />} />
      
        </Routes>
      </Context>
    </div>
  );
}

export default App;
