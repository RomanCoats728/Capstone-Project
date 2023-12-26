import React from "react";
import { useState,useEffect } from "react";
import axios from "../../api/axios";
import "./Products.css"
import Header from "../Header/Header";




const API_URL = 'https://fakestoreapi.com/products'

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data,setData] = useState([]);
    useEffect(()=>{
        setLoading(true);
        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products"
        }).then(res=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch((e) => console.log(e))
        .finally(()=> setLoading(false));
    },[]);
        
    return( 
<>
<Header/>
    <div className="product-container">
       
        {loading && ( <div> {""} <h1>loading...</h1></div>
        )}
        {data.map((product)=> (
            <div key={product.id} className="card">
                <div><img src={product.image} alt=""/></div>
                <div className="product-card"></div>
                <h6>{product.title}</h6>
                <h6>{`Price:$${product.price}`}</h6>
                
            </div>

        ))}

    </div>
    </>
    );
};

export default Products