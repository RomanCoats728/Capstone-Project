import "../style/index.css";
import { Link, Route, Routes } from "react-router-dom";
import Register from "./Login/Register";
import Login from "./Login/Login";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";




function App() {
 
  return (
   
    <div id="Main">
      <Sidebar/>
     
      <div id="navbar">
        <Link to="/">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Products"> Home</Link>
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
