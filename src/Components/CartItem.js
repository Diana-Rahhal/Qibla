import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function CartItem({props}){
    const {increment,decrement} = useContext(CartContext)
    return(


         <div className="cart__item">
            <div className="cart__item__image"><img src={props.image} alt="Item "></img></div>
            <div className="cart__item__name">{props.name}</div>
            <div className="cart__item__price">${props.price}</div>
            <div className="cart__item__controls">
                <button className="cart__item__decrement-btn" onClick={()=>{decrement(props.id)}}>-</button>
                <span className="cart__item__quantity">{props.quantity}</span>
                <button className="cart__item__increment-btn" onClick={()=>{increment(props.id)}}>+</button>
            </div>
            </div>
            
        );
}