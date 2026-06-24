import SectionTitle from "./SectionTitle";

function SuggestedBuildSection({ builds }) {
  return (
    <>
      <SectionTitle title="Cấu hình PC gợi ý" />

      <div className="build-grid">
        {builds.map((b, index) => (
          <div className="build-card" key={index}>
            <img src={b.img} alt={b.title} />
            <div>
              <h5>{b.title}</h5>
              <p>{b.desc}</p>
              <h4>{b.price}</h4>
              <button className="btn outline-btn">Xem chi tiết</button>
              <button className="btn primary-btn ms-2">Tùy chỉnh</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SuggestedBuildSection;