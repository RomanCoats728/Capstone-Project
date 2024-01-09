import React, { useState, useEffect, } from "react";
import axios from "../../api/axios";
import { useNavigate, useParams,useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Products.css";
import "../Sidebar/Sidebar.css";
import "../Header/Header.css";

const Category = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();


  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/category/${params.categoryname}`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [location.pathname]);

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
            <div className="product-card">
              <h6>{product.title}</h6>
              <h6>{`Price:$${product.price}`}</h6>
              <button onClick={() => navigate(`/SingleProducts/${product.id}`)}>
                Show Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
