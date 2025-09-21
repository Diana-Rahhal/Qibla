import "../CSS/cart.css";
import { useState } from "react";

export default function Cart({ isOpen, onClose }) {
  
  const [items, setItems] = useState([
    { id: 1, name: "Product Name", price: 19.99, quantity: 1, image: "../demo.png" },
    // You can add more items here dynamically later
  ]);

  // Increment quantity
  const increment = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity
  const decrement = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Subtotal calculation
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`header__cart-aside ${isOpen ? "show" : ""}`}>
      <div className="cart__title">
        <h3>Shopping Cart</h3>
        <div className="cart__close-btn" onClick={onClose}>
          ✖
        </div>
      </div>

      <div className="cart__items-container">
        {items.map((item) => (
          <div key={item.id} className="cart__item">
            <div className="cart__item__image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart__item__name">{item.name}</div>
            <div className="cart__item__price">${item.price.toFixed(2)}</div>
            <div className="cart__item__controls">
              <button
                className="cart__item__decrement-btn"
                onClick={() => decrement(item.id)}
              >
                -
              </button>
              <span className="cart__item__quantity">{item.quantity}</span>
              <button
                className="cart__item__increment-btn"
                onClick={() => increment(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart__footer">
        <div className="cart__footer__subtotal">
          <div>Subtotal:</div>
          <div className="cart__footer-subtotal__total-price">
            ${subtotal.toFixed(2)}
          </div>
        </div>
        <button className="cart__footer__checkout-btn">Check out</button>
      </div>
    </div>
  );
}
