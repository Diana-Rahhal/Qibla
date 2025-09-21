export default function CartItem(props){
    return(


         <div className="cart__item">
            <div className="cart__item__image"><img src="../demo.png" alt="Item "></img></div>
            <div className="cart__item__name">props.name</div>
            <div className="cart__item__price">props.price9</div>
            <div className="cart__item__controls">
                <button className="cart__item__decrement-btn">-</button>
                <span className="cart__item__quantity">1</span>
                <button className="cart__item__increment-btn">+</button>
            </div>
            </div>
            
        );
}