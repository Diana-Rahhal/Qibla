import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home"
import PrayerMats from "./Pages/PrayerMats";
import PrayerWear from "./Pages/PrayerWear";
import PrayerTimes from "./Pages/PrayerTimes";
import ProductDetails from './Pages/ProductDeatils';

import CollectionDetails from "./Pages/CollectionDetails";


import MatsCollectionProvider from './Context/MatsCollectionContext';
import WearCollectionProvider from './Context/WearsCollectionContext';
import PrayerTimesProvider from "./Context/PrayerTimesContext"
import MatsProductsProvider from './Context/MatsProductsContext'
import WearsProductsProvider from './Context/WearsProductsContext'
import {CartProvider}  from './Context/CartContext';
import WishlistProvider from './Context/WishlistContext';

function App() {
  return (
    <div className='app'>
        <MatsCollectionProvider>
        <WearCollectionProvider> 
        <PrayerTimesProvider>
        <WearsProductsProvider>
        <MatsProductsProvider>
        <CartProvider>
        <WishlistProvider>
    <Router>
      <Header />  

      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/prayer-mats" element={<PrayerMats />} />
        <Route path="/prayer-wear" element={<PrayerWear />} />
        <Route path="/prayer-times" element={<PrayerTimes />} />
        <Route path="/prayer-mats/:collectionName" element={<CollectionDetails />} />
        <Route path="/prayer-wears/:collectionName" element={<CollectionDetails />} />
         <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </WishlistProvider>
    </CartProvider>
    </MatsProductsProvider>
    </WearsProductsProvider>
    </PrayerTimesProvider>
    </WearCollectionProvider> 
    </MatsCollectionProvider>
    </div>
  
   
  );
}

export default App;
