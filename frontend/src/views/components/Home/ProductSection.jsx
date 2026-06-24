import SectionTitle from "./SectionTitle";

function ProductSection({ products }) {
  return (
    <>
      <SectionTitle title="Sản phẩm bán chạy" link="Xem tất cả" />

      <div className="product-grid">
        {products.map((p, index) => (
          <div className="product-card" key={index}>
            <div className="discount">-{p.sale}%</div>
            <img src={p.img} alt={p.name} />
            <h5>{p.name}</h5>
            <div className="price">{p.price}</div>
            <del>{p.old}</del>
            <div className="rating">
              ★★★★★ <span>Đã bán {p.sold}</span>
            </div>
            <button className="btn add-cart">Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductSection;
