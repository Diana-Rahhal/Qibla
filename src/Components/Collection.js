import '../CSS/collections.css'

export default function Collection({collection}){
    

    return(  
         <div className="collection">
                <img src={collection.image} alt="img"></img>
                <div className="collection-name">{collection.name}</div>
                <div className="total-number-of-products">{collection.totalNumberOfItems}</div>
                <div className="view-btn"><button>View</button></div>
            </div>
        );


}