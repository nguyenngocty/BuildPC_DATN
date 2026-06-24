function BuildPCSection() {
  const parts = [
    ["CPU", "Intel Core i5-14600K"],
    ["Mainboard", "MSI Z790 Tomahawk"],
    ["VGA", "RTX 4060 Ti 8GB"],
    ["RAM", "Corsair 16GB DDR5"],
    ["SSD", "Samsung 1TB NVMe"],
    ["PSU", "Corsair 650W"],
  ];

  return (
    <section className="pc-builder">
      <div className="section-title">
        <h2>Xây dựng cấu hình PC của bạn</h2>
        <p>Chọn nhanh linh kiện và xem giá tạm tính</p>
      </div>

      <div className="builder-grid">
        {parts.map((item, index) => (
          <div className="builder-item" key={index}>
            <small>{item[0]}</small>
            <h6>{item[1]}</h6>
            <i className="bi bi-check-circle-fill"></i>
          </div>
        ))}
      </div>

      <div className="builder-bottom">
        <h4>
          Tổng giá dự kiến: <span>28.650.000đ</span>
        </h4>
        <p>
          Công suất nguồn đề xuất: <b>650W</b>
        </p>
        <button className="btn primary-btn">Xem cấu hình chi tiết</button>
      </div>
    </section>
  );
}

export default BuildPCSection;
