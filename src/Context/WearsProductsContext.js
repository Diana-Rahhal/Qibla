import {  createContext ,useState , useEffect} from "react"


export const WearsProductsContext = createContext({
  WearsProducts: [],
  loading: true,
  error: null
});

export default function WearsProductsProvider({children})
{
    const [WearsProducts , setWearsProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
           async function fetchData() {
               try {
                   setLoading(true);
                   const res = await fetch("http://localhost:3000/prayerWears");
                   const data = await res.json();
                   setWearsProducts(data); 
               } catch (err) {
                   setError("Failed to fetch products");
               } finally {
                   setLoading(false);
               }
           }
   
          fetchData();
       }, []);

    return(
        <WearsProductsContext.Provider value={{WearsProducts, loading, error}}>{children}</WearsProductsContext.Provider>
    );
}