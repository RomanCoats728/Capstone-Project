import "./Header.css";
<<<<<<< HEAD
=======
import { Route, Routes, Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register";

>>>>>>> main


export default function Header(){
    return(
        <div className="Header" >
<<<<<<< HEAD
        <div className="header-title">
        <h1>The Super Store</h1>
        </div>
=======
            <div className="Header-Title">
                <h1>Super Store</h1>
            </div>
            <div className="Links">
            <Link to="/Login">Login</Link>
            <Link to="/Cart">Cart</Link>
                
            </div>
        
         
>>>>>>> main
        </div>
    );
}
