import "../CSS/cart.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem";

export default function Cart({ isOpen, onClose }) {
  const { items, increment, decrement } = useContext(CartContext);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`header__cart-aside ${isOpen ? "show" : ""}`}>
      <div className="cart__title">
        <h3>Shopping Cart</h3>
        <div className="cart__close-btn" onClick={onClose}>✖</div>
      </div>

      <div className="cart__items-container">
        {items.map((item) => (
          <CartItem key={item.id} props={item}></CartItem>
        ))}
      </div>

      <div className="cart__footer">
        <div className="cart__footer__subtotal">
          <div>Subtotal:</div>
          <div>${subtotal.toFixed(2)}</div>
        </div>
        <button className="cart__footer__checkout-btn">Check out</button>
      </div>
    </div>
  );
}
