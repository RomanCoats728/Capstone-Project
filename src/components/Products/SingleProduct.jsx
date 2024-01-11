import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Products.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Cartcontext } from "../../api";

export default function SingleProducts() {
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);

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
      setData([json]); // Update data state with the fetched product
    } catch (err) {
      console.error(err.message);
    }
  }

  console.log(product);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="cards">
        {data.map((item) => {
          product.quantity = 1;
          return(

          <div key={item.id} className="cards">
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h6># {item.description}</h6>
            <h4>Price:${item.price}</h4>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              Add to Cart
            </button>
          </div>
          );
        })}
      </div>
    </>
  );
}
