export default function Collection(props){

    return(  
         <div class="collection">
                <img src={props.imgSource} alt="img"></img>
                <div class="collection-name">{props.name}</div>
                <div class="total-number-of-products">{props.totalNumberOfProducts}</div>
                <div class="view-btn"><button>View</button></div>
            </div>
        );


}