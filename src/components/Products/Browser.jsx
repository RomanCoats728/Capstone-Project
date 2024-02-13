import React from "react";
import { useState, useEffect } from "react";
import "./Products.css";
import { useNavigate } from "react-router";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Header/Header.jsx";



const Browser = ({setToken}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const alertShownBefore = localStorage.getItem("alertShown");
  

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        alert("While Browsing You Can Not Make Purchases Please Register In Order To Buy!!");
        localStorage.setItem("alertShown","true")
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);



  return (
    
    <>
    
    <div className="Header">
        <div className="Header-Title">
          <h1>Super Store</h1>
        </div>
        <div className="Links">
          <Link to="/Register">
            Register
          </Link>
        </div>
       <Link className="log-out-btn" to="/">
        Login
       </Link>
      </div>
     
      <Sidebar />
      
      <div className="product-container">
        {loading && (
          <div>
            {" "}
            {""} <h1>loading...</h1>
          </div>
        )}

        {data.map((product) => {
          
          return (
            <div key={product.id} className="card">
              <div>
                <img src={product.image} alt="" />
              </div>
              <div className="product-card"></div>
              <h6>{product.title}</h6>
              <h6>{`Price:$${product.price}`}</h6>
              <div className="ButtonContainer">
                <button
                  onClick={() => navigate(`/SingleProducts/${product.id}`)}
                >
                  Show Details
                </button>
            
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};


export default Browser;