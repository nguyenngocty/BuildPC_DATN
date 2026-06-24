function TrustSection() {
  const items = [
    ["bi-shield-check", "Hàng chính hãng 100%"],
    ["bi-award", "Bảo hành dài hạn"],
    ["bi-truck", "Giao hàng toàn quốc"],
    ["bi-headset", "Tư vấn build miễn phí"],
    ["bi-people", "10.000+ khách hàng"],
  ];

  return (
    <section className="trust-section">
      {items.map((item, index) => (
        <div key={index}>
          <i className={`bi ${item[0]}`}></i>
          <h6>{item[1]}</h6>
        </div>
      ))}
    </section>
  );
}

export default TrustSection;
