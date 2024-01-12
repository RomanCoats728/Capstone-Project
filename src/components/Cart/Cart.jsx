import { useContext } from "react";
import { Cartcontext } from "../../api";
import "./Cart.css";
import {} from "@fortawesome/fontawesome-svg-core";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  return (
    <div className="cart">
      {state.map((product, index) => {
        return (
          <div className="cartitem" key={index}>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <p>{product.quantity}</p>
            <p>${product.quantity * product.price}</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: product })}
              >
                +
              </button>
              <p>{product.quantity}</p>
              <button>-</button>
            </div>
            <h2>X</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
