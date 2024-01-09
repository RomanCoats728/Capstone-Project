
import { Link, Route, Router, Routes,} from "react-router-dom";

import Register from "./Login/Register";
import Login from "./Login/Login";
import Products from "./Products/AllProducts";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import SingleProducts from "./Products/SingleProduct";
import { AboutUs } from "./AboutUs.jsx/AboutUs";
import { ContactUs } from "./ContactUs.jsx/ContactUS";
import Category from "./Products/Category";


function App() {
  return (
    <>

      <Routes>
  <Route path="/" element={<Products />} />
  <Route path="/SingleProducts/:id" element={<SingleProducts/>}/>
  <Route path="/category/:categoryname" element={<Category/>}/>
  <Route path="Login" element={<Login/>}/>
  <Route path="ContactUs" element={<ContactUs/>}/>
  <Route path="AboutUs" element={<AboutUs/>}/>
  <Route path="Register" element={<Register/>}/>
</Routes>

    </>
  );
}

export default App;
