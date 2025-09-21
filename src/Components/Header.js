import { useState } from "react";
import "../CSS/header.css"
import Cart from './Cart'


export default function Header(){
  const [cartOpen , setCartOpen] = useState(false)
  const [menuOpen , setMenuOpen] = useState(false);


    return(
    <div className="header">
        <div 
        className="header__menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>

        <div className="header__logo">
            <img 
            src="../logo.png" 
            alt="Qibla Logo" 
        >
            </img>
        </div>

       

        <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
          <div>
             <a href="../home.html">Home</a>
          </div>
           
            <div className="prayer-mats-wrapper">
               <a className="prayer-mats-tag" href="../prayerMats.html">Prayer Mats</a>

                <div className="prayer-mats-nav">
                  <a href="../Collections/Original.html">Original</a>
                  <a href="../Collections/Premuim.html">Premuim</a>
                  <a href="../Collections/LittleOnes.html">Little Ones</a>
                  
                </div>
            </div>

             <div className="prayer-wear-wrapper">
                <a  className="prayer-wear-tag" href="../prayerWear.html">Prayer Wear</a>
                <div className="prayer-wear-nav">
                  <a href="../Collections/Women.html">Women</a>
                  <a href="../Collections/Men.html">Men</a>
                  <a href="../Collections/LittleOnes.html">Kids</a>
                </div>
             </div>
            
          <div>
            <a href="../prayerTimes.html">Prayer Times</a>
          </div>
           
            
        </nav>
    
        <div className="header__icons">
        <div className="header__icon header__icon--search">
            <svg 
                className="header__icon-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm9-2-4-4"/>
            </svg>
        </div>
        
        <div  className="header__icon header__icon--cart" onClick={()=>{setCartOpen(true)}}>
            <svg 
            className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
            </svg>

        </div>

        <div className="header__icon header__icon--whishlist">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
            </svg>
        
    </div>
    </div>
    <Cart isOpen = {cartOpen}  onClose={() => setCartOpen(false)}/>
    </div>);
}