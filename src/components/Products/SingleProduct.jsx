import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Products.css"
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export default function SingleProducts() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchSingleProducts();
  }, []);

  async function fetchSingleProducts() {
    let API = `https://fakestoreapi.com/products/${id}`;

    try {
      const { data: json } = await axios.get(`${API}`);
      console.log(json);

      setProduct(json);
    } catch (err) {
      console.error(err.message);
    }
  }

  console.log(product);

  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="cards">
      {product.id ? (
        
        <div className="cards">
          <img src={product.image} alt="" />
          <h2>{product.title}</h2>
          <h6># {product.description}</h6>
          <h4>Price:${product.price}</h4>
        </div>
        
        
      ) : (
        <h1>No Product"{id}". Try again.</h1>
      )}
    </div>
    </>
    
  );
}
