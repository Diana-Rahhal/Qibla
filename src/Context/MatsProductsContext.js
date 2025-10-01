// MatsProductsContext.jsx
import { createContext, useState, useEffect } from "react";

export const MatsProductsContext = createContext({
  MatsProducts: [],
  loading: true,
  error: null
});

export default function MatsProductsProvider({ children }) {
  const [MatsProducts, setMatsProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/prayerMats");
        const data = await res.json();
        setMatsProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <MatsProductsContext.Provider value={{ MatsProducts, loading, error }}>
      {children}
    </MatsProductsContext.Provider>
  );
}
