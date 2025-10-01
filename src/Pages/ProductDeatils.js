import '../CSS/productDeatils.css'


import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>No product details available</div>;
  }

  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />

      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>

      <div className="product-actions">
        <button className="add-to-cart">Add to Cart</button>
        <button className="add-to-wishlist">Add to Wishlist</button>
      </div>
    </div>
  );
}
