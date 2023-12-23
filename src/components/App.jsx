import "../style/index.css";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./Login/Register";
import Login from "./Login/Login";
import Products from "./Products.js/Products";




function App() {
 
  return (
   
    <div id="Main">
     
      <div id="navbar">
        <Link to="/">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Products">Products</Link>
      </div>
      <div id="Main-section">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Products" element={<Products/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
