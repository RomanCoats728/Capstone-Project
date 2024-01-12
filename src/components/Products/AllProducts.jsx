import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import "./Products.css";
import { useNavigate } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header.jsx";
import { Cartcontext } from "../../api/index.jsx";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="product-container">
        {loading && (
          <div>
            {" "}
            {""} <h1>loading...</h1>
          </div>
        )}
        
        {data.map((product) => {
          product.quantity = 1;
          return (
            <div key={product.id} className="card">
              <div>
                <img src={product.image} alt="" />
              </div>
              <div className="product-card"></div>
              <h6>{product.title}</h6>
              <h6>{`Price:$${product.price}`}</h6>
              <div className="ButtonContainer">
                <button onClick={() => navigate(`/SingleProducts/${product.id}`)}>
                  Show Details
                </button>
                <button onClick={() => dispatch({ type: "ADD", payload: product })}>
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;

