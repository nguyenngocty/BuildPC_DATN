import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge-forgepc">
              <i className="bi bi-cpu-fill"></i> VỀ BUILPC
            </span>
            <h1 className="hero-title">
              Kiến tạo{" "}
              <span className="text-primary-forge">Sức mạnh Đỉnh cao</span>
            </h1>
            <p className="hero-description">
              ForgePC là nền tảng hàng đầu dành cho những người đam mê phần
              cứng. Chúng tôi kết hợp độ chính xác kỹ thuật, dữ liệu benchmark
              chuyên sâu và các linh kiện cao cấp nhất để bạn tự tin xây dựng cỗ
              máy trong mơ.
            </p>
            <div className="btn-group">
              <Link to="/products" className="hero-link hero-link-primary">
                Khám phá linh kiện{" "}
                <i className="bi bi-arrow-right icon-right"></i>
              </Link>
              <Link to="/buildpc" className="hero-link hero-link-secondary">
                PC Builder Tool
              </Link>
            </div>
          </div>
          <div className="hero-image-box">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
                alt="ForgePC Mainboard"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tầm nhìn & Sứ mệnh Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Tầm nhìn & Sứ mệnh</h2>
            <div className="heading-underline"></div>
          </div>

          <div className="vision-grid">
            {/* Card Mục tiêu */}
            <div className="custom-card card-goal">
              <div className="icon-circle bg-light-blue text-primary">
                <i className="bi bi-bullseye"></i>
              </div>
              <h3 className="card-title">Mục tiêu của chúng tôi</h3>
              <p className="card-text">
                Mang đến trải nghiệm lắp ráp PC chuyên nghiệp, minh bạch và mạnh
                mẽ nhất Việt Nam. Chúng tôi cam kết cung cấp các linh kiện máy
                tính chất lượng hàng đầu, kèm theo hệ thống dữ liệu kỹ thuật
                chuẩn xác, giúp người dùng từ nghiệp dư đến chuyên gia đều có
                thể đưa ra quyết định tối ưu.
              </p>
            </div>

            {/* Card Tầm nhìn */}
            <div className="custom-card card-vision-2025">
              <div className="icon-circle bg-light-red text-danger">
                <i className="bi bi-infinity"></i>
              </div>
              <h3 className="card-title">Tầm nhìn 2025</h3>
              <p className="card-text">
                Trở thành nền tảng công nghệ phần cứng số 1 Đông Nam Á, tích hợp
                AI để tối ưu hóa việc chọn lựa linh kiện.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị Cốt lõi Section */}
      <section className="core-values-section">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-heading">Giá trị Cốt lõi</h2>
            <p className="section-subheading">
              Nền tảng vững chắc đứng sau mỗi cỗ máy chúng tôi cung cấp.
            </p>
          </div>

          <div className="values-grid">
            {/* Value 1 */}
            <div className="custom-card text-center">
              <div className="icon-circle mx-auto bg-light-red text-danger">
                <i className="bi bi-patch-check"></i>
              </div>
              <h4 className="value-title">Chất Lượng Đỉnh Cao</h4>
              <p className="card-text font-sm">
                Chỉ phân phối và đề xuất các linh kiện chính hãng từ các thương
                hiệu hàng đầu thế giới, đảm bảo độ bền bỉ.
              </p>
            </div>

            {/* Value 2 */}
            <div className="custom-card text-center">
              <div className="icon-circle mx-auto bg-light-blue text-primary">
                <i className="bi bi-sliders"></i>
              </div>
              <h4 className="value-title">Chính Xác Kỹ Thuật</h4>
              <p className="card-text font-sm">
                Mọi thông số, dữ liệu benchmark đều được kiểm chứng độc lập.
                Không phóng đại, chỉ có sự thật kỹ thuật.
              </p>
            </div>

            {/* Value 3 */}
            <div className="custom-card text-center">
              <div className="icon-circle mx-auto bg-light-teal text-teal">
                <i className="bi bi-headset"></i>
              </div>
              <h4 className="value-title">Hỗ Trợ Tận Tâm</h4>
              <p className="card-text font-sm">
                Đội ngũ chuyên gia phần cứng luôn sẵn sàng tư vấn, giải đáp cấu
                hình 24/7 cho mọi nhu cầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Đối tác Công nghệ Chiến lược */}
      <section className="partners-section">
        <div className="container text-center">
          <h2 className="section-heading mb-large">
            Đối tác Công nghệ Chiến lược
          </h2>
          <div className="partners-flex">
            <span className="partner-logo">INTEL</span>
            <span className="partner-logo">AMD</span>
            <span className="partner-logo">NVIDIA</span>
            <span className="partner-logo">ASUS</span>
            <span className="partner-logo">MSI</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
