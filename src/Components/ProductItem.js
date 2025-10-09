import "../CSS/products.css";
import { useNavigate } from "react-router-dom";

export default function ProductItem({ product }) {
  const navigate = useNavigate();

  const redirectToProductDetails = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-item" onClick={()=>{redirectToProductDetails(product)}}>
      <img src={product.image} alt={product.name} className="product-image" />

      <h2 className="product-name">{product.name}</h2>
      {/* <p className="product-description">{product.description}</p> */}
      <p className="product-price">${product.price}</p>
    </div>
  );
}
