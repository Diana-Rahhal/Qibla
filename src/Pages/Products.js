export default function Products() {
  return (
    <div>
      <div className="marketing-image">
        <img src="image.png" alt="Marketing" />
      </div>

      <div className="filter-sidebar"></div>

      <div className="products">
        <div className="products__item">
          <img src="p.jpg" alt="Product" />
          <div className="products__item__name">Diana Rahhal</div>
          <div className="products__item__reviews">stars</div>
          <div className="products__item__price">90</div>
        </div>
      </div>
    </div>
  );
}
