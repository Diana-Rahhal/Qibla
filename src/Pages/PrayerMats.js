import Collection from '../Components/Collection';
import { useContext } from "react";
import { MatsCollectionContext } from "../Context/MatsCollectionContext";

export default function PrayerMats() {
  const collections = useContext(MatsCollectionContext) || [];
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
