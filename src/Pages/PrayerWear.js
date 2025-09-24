import { WearsCollectionContext } from "../Context/WearsCollectionContext";
import { useContext } from "react";
import Collection from "../Components/Collection";

export default function PrayerWear() {
  const collections = useContext(WearsCollectionContext) || [];
  console.log(collections);

  return (
    <div className="collections">
      
        {collections.map((collection) => (
          <li key={collection.id}>
            <Collection collection={collection} />
          </li>
        ))}
    
    </div>
  );
}
