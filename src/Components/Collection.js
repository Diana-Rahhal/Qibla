import '../CSS/collections.css'
import { useState } from 'react';
import { Link} from 'react-router-dom'

export default function Collection({ collection }) {
    
    const [show, setShow] = useState(false);

    return (
        <div
            className="collection"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <img src={collection.image} alt="img" />
            <div className="collection-name">{collection.name}</div>
            <div className={`total-number-of-products ${show ? "show" : ""}`}>
                {collection.totalNumberOfItems}
            </div>
            <div className={`view-btn ${show ? "show" : ""}`}>
               <Link to={`/${collection.type}/${collection.name}`}>
                     <button>View</button>
                </Link>

            </div>
        </div>
    );
}
