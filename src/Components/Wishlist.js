import { useContext } from 'react';
import {WishlistContext} from '../Context/WishlistContext'
import WishlistItem from '../Components/WishlistItem'
import '../CSS/whishlist.css'


export default function Wishlist({isOpen,onClose})
{
  const {items} = useContext(WishlistContext)||[];



  return(
  <div className=  {`wishlistPopup ${isOpen? "show" :""}`}>
        <div className="wishlistPopup__header">
          <h2>Wishlist </h2>
          <button onClick={onClose}>✖</button>
        </div>
       
         <div className="wishlistPopup__items-container">
        {items.length > 0 ? (
          items.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))
        ) : (
          <p className="wishlistPopup__empty">Your wishlist is empty 🛍️</p>
        )}
      </div>
    </div>
  );

}