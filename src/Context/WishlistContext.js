import { createContext, useState } from "react";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);

  // Add item if not already in wishlist
  const addToWishlist = (item) => {
    setItems((prevItems) => {
      const exists = prevItems.some((i) => i.id === item.id);
      if (!exists) {
        return [...prevItems, item];
      }
      return prevItems; // prevent duplicates
    });
  };

  // Remove item by id
  const removeFromWishlist = (itemId) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
