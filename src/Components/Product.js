


export default function Product(props){
    return(
    <div className="products__item">
      <img src= {props.source} alt="img"/>
      <div class="products__item__name">props.name</div>
      <div class="products__item__reviews">props.reviews</div>
      <div class="products__item__price">props.price</div>
    </div>)
    ;

}