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
import Browser from "./Products/Browser";

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <div className="App">
      <Context>
        <Routes>
          {token ? (
            <>
              <Route
                path="/SingleProducts/:id"
                element={<SingleProducts setToken={setToken} />}
              />
              <Route path="/category/:categoryname" element={<Category />} />
              <Route
                path="/ContactUs"
                element={<ContactUs setToken={setToken} />}
              />
              <Route
                path="/AboutUs"
                element={<AboutUs setToken={setToken} />}
              />
              <Route path="/Cart" element={<Cart setToken={setToken} />} />
              <Route path="/" element={<Products setToken={setToken} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Browser />} />
              <Route
                path="/Login"
                element={<Login token={token} setToken={setToken} />}
              />
              <Route path="/Register" element={<Register />} />
            </>
          )}
        </Routes>
      </Context>
    </div>
  );
}

export default App;
