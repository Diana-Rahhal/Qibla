import { useContext } from "react";
import "../CSS/prayerTimes.css";
import { PrayerTimesContext } from "../Context/PrayerTimesContext";

export default function PrayerTimes() {
    const { prayerTimes, loading, error } = useContext(PrayerTimesContext);

    if (loading) return <p>Loading prayer times...</p>;
    if (error) return <p>{error}</p>;
    if (!prayerTimes) return <p>No prayer times available</p>;

    return (
        <main>
            <div className="Fajr">
                <div><span>الفجر</span></div>
                <div className="time">{prayerTimes.Fajr}</div>
            </div>

            <div className="Sunrise">
                <div><span>الشروق</span></div>
                <div className="time">{prayerTimes.Sunrise}</div>
            </div>

            <div className="Dhuhr">
                <div><span>الظهر</span></div>
                <div className="time">{prayerTimes.Dhuhr}</div>
            </div>

            <div className="Asr">
                <div><span>العصر</span></div>
                <div className="time">{prayerTimes.Asr}</div>
            </div>

            <div className="Maghrib">
                <div><span>المغرب</span></div>
                <div className="time">{prayerTimes.Maghrib}</div>
            </div>

            <div className="Isha">
                <div><span>العشاء</span></div>
                <div className="time">{prayerTimes.Isha}</div>
            </div>
        </main>
    );
}
