import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Products.css"
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Cartcontext } from "../../api";

export default function SingleProduct({ setToken }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleProduct();
  }, [id]);

  return (
    <>
      <Header setToken={setToken} />
      <Sidebar />
      <div className="single-product">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="product-details">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>Price: ${product.price}</h4>
            <button onClick={() => dispatch({ type: "ADD", payload: product })}>
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
