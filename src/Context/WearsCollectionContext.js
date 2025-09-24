import { createContext, useState, useEffect } from "react";

// Create the context
export  const WearsCollectionContext = createContext([]);

export default function WearCollectionsProvider({ children }) {
  const [collections, setCollections] = useState([]);

  const fetchData = () => {
    try {
      fetch("http://localhost:3000/prayerWearCollections")
        .then((response) => {
          if (!response.ok) {
            throw Error("Network response not okay");
          }
          return response.json();
        })
        .then((data) => setCollections(data))
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    } catch (e) {
      console.error("Unexpected error:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WearsCollectionContext.Provider value={collections}>
      {children}
    </WearsCollectionContext.Provider>
  );
}
