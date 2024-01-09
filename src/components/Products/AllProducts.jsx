import React from "react";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
// import "./Products.css";
import { useNavigate } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header.jsx";



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
        {data.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt="" />
            </div>
            <div className="product-card"></div>
            <h6>{product.title}</h6>
            <h6>{`Price:$${product.price}`}</h6>
            <button onClick={() => navigate(`/SingleProducts/${product.id}`)}>
              Show Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
