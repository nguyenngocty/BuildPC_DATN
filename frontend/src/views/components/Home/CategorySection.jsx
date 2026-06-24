import SectionTitle from "./SectionTitle";

function CategorySection({ categories }) {
  return (
    <>
      <SectionTitle title="Danh mục nổi bật" link="Xem tất cả" />

      <div className="category-grid">
        {categories.map((name, index) => (
          <div className="category-card" key={index}>
            <i className="bi bi-pc-display-horizontal"></i>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategorySection;