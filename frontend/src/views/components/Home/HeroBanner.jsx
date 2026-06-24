function HeroBanner() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="badge-sale">Flash sale giảm đến 35%</div>
            <h1>
              Build PC theo ý bạn <br />
              linh kiện chính hãng
            </h1>
            <p>
              Tự chọn cấu hình, kiểm tra tương thích, nhận tư vấn build miễn phí
              và báo giá nhanh.
            </p>

            <div className="hero-actions">
              <button className="btn primary-btn">Bắt đầu Build PC</button>
              <button className="btn outline-btn">Xem Deal Hot</button>
            </div>

            <div className="trust-row">
              <span>
                <i className="bi bi-shield-check"></i> Chính hãng 100%
              </span>
              <span>
                <i className="bi bi-truck"></i> Giao nhanh
              </span>
              <span>
                <i className="bi bi-award"></i> Bảo hành 36 tháng
              </span>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-card">
              <img
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80"
                alt="PC Gaming"
              />
              <div className="countdown">
                <div>
                  <b>02</b>
                  <span>Ngày</span>
                </div>
                <div>
                  <b>14</b>
                  <span>Giờ</span>
                </div>
                <div>
                  <b>45</b>
                  <span>Phút</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
