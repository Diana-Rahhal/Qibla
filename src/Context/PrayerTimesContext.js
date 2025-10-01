// PrayerTimesContext.jsx
import { createContext, useState, useEffect } from "react";

export const PrayerTimesContext = createContext();

export default function PrayerTimesProvider({ children }) {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPrayerTimes() {
            try {
                setLoading(true);
                const res = await fetch("https://api.aladhan.com/v1/timingsByCity?city=Beirut&country=Lebanon&method=2");
                const data = await res.json();
                setPrayerTimes(data.data.timings); // only store timings
            } catch (err) {
                setError("Failed to fetch prayer times");
            } finally {
                setLoading(false);
            }
        }

        fetchPrayerTimes();
    }, []);

    return (
        <PrayerTimesContext.Provider value={{ prayerTimes, loading, error }}>
            {children}
        </PrayerTimesContext.Provider>
    );
}
