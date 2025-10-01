import { useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { MatsProductsContext } from "../Context/MatsProductsContext";
import { WearsProductsContext } from "../Context/WearsProductsContext";

import ProductItem from '../Components/ProductItem'

export default function CollectionDetails() {
  const { collectionName } = useParams();
  const location = useLocation();

  const isPrayerMats = location.pathname.startsWith("/prayer-mats");
 
  const isPrayerWear = location.pathname.startsWith("/prayer-wear");

  const { MatsProducts = [], loading: matsLoading, error: matsError } = useContext(MatsProductsContext) || {};
  const { WearsProducts = [], loading: wearsLoading, error: wearsError } = useContext(WearsProductsContext) || {};

  // Choose the right data
  const collections = isPrayerMats ? MatsProducts : WearsProducts;
  const loading = isPrayerMats ? matsLoading : wearsLoading;
  const error = isPrayerMats ? matsError : wearsError;

  // Find the collection by name
  const collection = collections.find(c => c.collectionName === collectionName);
  const filteredProducts = collection?.products || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (filteredProducts.length === 0) return <p>No products found in this collection.</p>;

  return (
    <div className="products">
      {/* <h2>{isPrayerMats ? "Prayer Mats" : "Prayer Wear"}: {collectionName}</h2> */}
      
        {filteredProducts.map(product => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      
    </div>
  );
}
