import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Products from "./Pages/Products";
import PrayerMats from "./Pages/PrayerMats";
import PrayerWear from "./Pages/PrayerWear";
import PrayerTimes from "./Pages/PrayerTimes";
import MatsCollectionProvider from './Context/MatsCollectionContext';
import WearCollectionProvider from './Context/WearsCollectionContext';

function App() {
  return (
    <div className='app'>
        <MatsCollectionProvider>
        <WearCollectionProvider> 
    <Router>
      <Header />  

      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/prayer-mats" element={<PrayerMats />} />
        <Route path="/prayer-wear" element={<PrayerWear />} />
        <Route path="/prayer-times" element={<PrayerTimes />} />
      </Routes>
    </Router>
    </WearCollectionProvider> 
    </MatsCollectionProvider>
    </div>
  
   
  );
}

export default App;
