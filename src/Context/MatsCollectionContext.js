import { createContext , useState , useEffect } from "react";

export const MatsCollectionContext = createContext([]);



export default function MatsCollectionProvider({children})
{
    const [collection , setCollections] = useState([]);

  const fetchCollections = () => {
  try {
    fetch("http://localhost:3000/prayerMatsCollections")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // ✅ return the JSON
      })
      .then((data) => {
         // Add type field before saving
          const collectionsWithType = data.map((item) => ({
            ...item,
            type: "prayer-mats", // since this fetch is only for wears
          }));
          setCollections(collectionsWithType);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};


    useEffect(()=>{fetchCollections()},[])

    return(
        <MatsCollectionContext.Provider value={collection}>
            {children}
        </MatsCollectionContext.Provider>
    );


}