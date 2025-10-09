import { useState , useContext} from "react";
import { Link } from "react-router-dom"; 
import "../CSS/header.css";
import Cart from './Cart';
import {MatsCollectionContext } from "../Context/MatsCollectionContext";
import {WearsCollectionContext } from "../Context/WearsCollectionContext";
import Wishlist from './Wishlist'

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const Matscollections= useContext(MatsCollectionContext) || [];
  const Wearcollections= useContext(WearsCollectionContext) || [];

  return (
    <div className="header">
      <div 
        className="header__menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>

      <div className="header__logo">
        <img src="../images/logo.png" alt="Qibla Logo" />
      </div>

      <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
        <div>
          <Link to="/">Home</Link>
        </div>

        <div className="prayer-mats-wrapper">
          <Link className="prayer-mats-tag" to="/prayer-mats">Prayer Mats</Link>
          <div className="prayer-mats-nav">
            {Matscollections.map((collection)=>(<li key={collection.id}>
                  <Link to={`/prayer-mats/${collection.name}`}>
                  {collection.name}
                  </Link></li>))}
             
          </div>
        </div>

        <div className="prayer-wear-wrapper">
          <Link className="prayer-wear-tag" to="/prayer-wear">Prayer Wear</Link>
          <div className="prayer-wear-nav">
         {Wearcollections.map((collection)=>(<li key={collection.id}>
                  <Link to={`/prayer-wears/${collection.name}`}>
                  {collection.name}
                  </Link></li>))}
          </div>
        </div>

        <div>
          <Link to="/prayer-times">Prayer Times</Link>
        </div>
      </nav>

      <div className="header__icons">
        <div className="header__icon header__icon--search">
          <svg className="header__icon-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm9-2-4-4"/>
          </svg>
        </div>
        
        <div className="header__icon header__icon--cart" onClick={() => setCartOpen(true)}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg>
        </div>

        <div className="header__icon header__icon--whishlist"  onClick={() => setWishlistOpen(true)}>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
          </svg>
        </div>
      </div>

      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <Wishlist isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} />
    </div>
  );
}
