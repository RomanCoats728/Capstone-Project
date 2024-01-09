import "./Header.css";
import { Route, Routes, Link } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register";



export default function Header(){
    return(
        <div className="Header" >
            <div className="Header-Title">
                <h1>Super Store</h1>
            </div>
            <div className="Links">
            <Link to="/Login">Login</Link>

                
            </div>
        
         
        </div>
    );
}
