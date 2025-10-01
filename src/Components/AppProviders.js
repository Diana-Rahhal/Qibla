// AppProviders.jsx
import React, { useState } from "react";
import MatsCollectionProvider, { MatsCollectionContext } from "../Context/MatsCollectionContext";
import WearCollectionProvider, { WearCollectionContext } from "../Context/WearsCollectionContext";
import PrayerTimesProvider, { PrayerTimesContext } from "../Context/PrayerTimesContext";
import MatsProductsProvider, { MatsProductsContext } from "../Context/MatsProductsContext";
import WearsProductsProvider, { WearsProductsContext } from "../Context/WearsProductsContext";

export default function AppProviders({ children }) {
  return (
    <MatsCollectionProvider>
      <WearCollectionProvider>
        <PrayerTimesProvider>
          <WearsProductsProvider>
            <MatsProductsProvider>{children}</MatsProductsProvider>
          </WearsProductsProvider>
        </PrayerTimesProvider>
      </WearCollectionProvider>
    </MatsCollectionProvider>
  );
}
