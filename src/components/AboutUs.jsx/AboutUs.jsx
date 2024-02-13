import superstore from "../../assets/superstore.jpeg";
import React from "react";
import "./AboutUs.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export function AboutUs({setToken}) {
  return (
    <>
      <Header setToken={setToken} />
      <Sidebar />
      <div className="Section">
        <div className="Banner">
          <img src={superstore} alt="png" />
        </div>
      
      <div className="Subheading">
        <h2>About Us</h2>
      </div>
      <div className="AboutUs">
        <p>
          We provide you with an excellent shopping experience as our client’s
          satisfaction matter a lot. We have the perfect combination of Apparel
          that are tailored and Electrontic to meet your needs through our
          standard shopping practice. Even if you are not sure of what you want,
          our e-shop has got several ways to help you identify your needs.
          Everything about "The Super Store" revolves around our commitment to
          help you look your best and inspire confidence in you. We have been
          operating for over One Year and we have managed to build up a
          reputable establishment online. We have a great team and aim to grow
          our business more and more, offering our customers the best
          products.If you have any questions about our products, or if would
          like to check the availability of an item, please use the “Contact Us”
          page to get in touch.
        </p>
      </div>
      </div>
    </>
  );
}
