import { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../../api";
import "./Cart.css";
import {
  faTrash,
  faSadTear,
  faRectangleXmark,
  faCity,
  faAddressCard,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
const stateFromLocalStorage = JSON.parse(localStorage.getItem("state") || "[]");
const Cart = ({ setToken }) => {
  const Globalstate = useContext(Cartcontext, stateFromLocalStorage);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const [popup, setPopup] = useState(false);
  const handleClickOpen = () => {
    setPopup(!popup);
  };
  const closepopup = () => {
    setPopup(false);
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  return (
    <>
      <Sidebar />
      <Header setToken={setToken} />
      <div className="cart">
        {state.length === 0 ? (
          <h1 className="empty">
            Your Shopping Cart is Empty
            <FontAwesomeIcon icon={faSadTear} size="3x" />
          </h1>
        ) : (
          <>
            {state.map((product, index) => {
              return (
                <div className="cartitem" key={index}>
                  <img src={product.image} alt="" />
                  <p>{product.title}</p>
                  <p>{product.quantity}</p>
                  <p>${product.quantity * product.price}</p>
                  <div className="quantity">
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: product })
                      }
                    >
                      +
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      onClick={() => {
                        if (product.quantity > 1) {
                          dispatch({ type: "DECREASE", payload: product });
                        } else {
                          dispatch({ type: "REMOVE", payload: product });
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                  <h2
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: product })
                    }
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </h2>
                </div>
              );
            })}
            {state.length > 0 && (
              <div className="total">
                <h2>{total}</h2>
              </div>
            )}
            <div className="Checkout">
              <button className="submit" onClick={handleClickOpen}>
                Check out
              </button>
            </div>
            {popup ? (
              <div className="checkout-popup">
                <div className="main">
                  <div className="popup-form">
                    <div className="form-header">
                      <h1>Checkout</h1>
                      <h3 className="close" onClick={closepopup}>
                        <FontAwesomeIcon icon={faRectangleXmark} />
                      </h3>
                    </div>
                    <div className="CF1">
                      <form className="CF">
                        <div className="row">
                          <div className="Col50">
                            <h3>Billing Address</h3>
                            <label for="fname">
                              <FontAwesomeIcon icon={faUser} />
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="fname"
                              name="firstname"
                              placeholder="John M. Doe"
                            />
                            <label for="email">
                              <FontAwesomeIcon icon={faEnvelope} />
                              Email
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              placeholder="john@example.com"
                            />
                            <label for="adr">
                              <FontAwesomeIcon icon={faAddressCard} /> Address
                            </label>
                            <input
                              type="text"
                              id="adr"
                              name="address"
                              placeholder="542 W. 15th Street"
                            />
                            <label for="city">
                              <FontAwesomeIcon icon={faCity} />
                              City
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              placeholder="New York"
                            />
                            <div class="row">
                              <div class="Col50">
                                <label for="state">State</label>
                                <input
                                  type="text"
                                  id="state"
                                  name="state"
                                  placeholder="NY"
                                />
                              </div>
                              <div class="Col50">
                                <label for="zip">Zip</label>
                                <input
                                  type="text"
                                  id="zip"
                                  name="zip"
                                  placeholder="10001"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="Col50">
                            <label for="cname">Name on Card</label>
                            <input
                              type="text"
                              id="cname"
                              name="cardname"
                              placeholder="John More Doe"
                            />
                            <label for="ccnum">Credit card number</label>
                            <input
                              type="text"
                              id="ccnum"
                              name="cardnumber"
                              placeholder="1111-2222-3333-4444"
                            />
                            <label for="expmonth">Exp Month</label>
                            <input
                              type="text"
                              id="expmonth"
                              name="expmonth"
                              placeholder="September"
                            />
                            <div className="row">
                              <div className="Col50">
                                <label for="expyear">Exp Year</label>
                                <input
                                  type="text"
                                  id="expyear"
                                  name="expyear"
                                  placeholder="2018"
                                />
                              </div>
                              <div className="Col50">
                                <label for="cvv">CVV</label>
                                <input
                                  type="text"
                                  id="cvv"
                                  name="cvv"
                                  placeholder="352"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <label htmlFor="sameadr">
                          <input
                            type="checkbox"
                            checked="checked"
                            name="sameadr"
                          />{" "}
                          Shipping address same as billing
                        </label>
                        <h4>Your Total is {total}</h4>
                        <input
                          type="submit"
                          value="Continue to checkout"
                          class="btn"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </div>
      :
    </>
  );
};

export default Cart;
