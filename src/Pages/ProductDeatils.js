import { useContext } from 'react';
import '../CSS/productDeatils.css'
import {CartContext} from '../Context/CartContext'
import {WishlistContext} from '../Context/WishlistContext'


import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const product = location.state?.product;
  const {addToCart} = useContext(CartContext);
  const {addToWishlist} = useContext(WishlistContext)

  if (!product) {
    return <div>No product details available</div>;
  }


  return (
    <div className="product">
      
      
      <div className='product-image'><img src={product.image} alt={product.name} className="product-image" /></div>

     
     

      <div className="product-deatils">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <div className='product-actions'>
          <button onClick={() => addToCart(product)}  className="add-to-cart">Add to Cart</button>
          <button onClick={()=> addToWishlist(product)}  className="add-to-wishlist">Add to Wishlist</button>

        </div>
        
      </div>
    </div>
  );
}
