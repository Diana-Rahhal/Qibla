import {MatsCollectionContext } from "../Context/MatsCollectionContext";
import {WearsCollectionContext } from "../Context/WearsCollectionContext";
import { useContext } from "react";
import Collection from "../Components/Collection"

export default function Home()
{
    const Matscollections= useContext(MatsCollectionContext) || [];
    const Wearcollections= useContext(WearsCollectionContext) || [];
   
    return(
        <div className="collections">
           
               
              {
                Matscollections.map((collection)=>(<li key={collection.id}>
                <Collection collection={collection}></Collection></li>))}
                {
                 Wearcollections.map((collection)=>(<li key={collection.id}>
                <Collection collection={collection}></Collection></li>))
                } 
                
           
        </div>
    );
}