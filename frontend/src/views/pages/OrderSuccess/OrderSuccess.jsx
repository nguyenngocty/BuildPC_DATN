import { Link } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <div className="success-container">
      <div className="success-card">

        {/* ✅ ICON THÀNH CÔNG */}
        <div className="success-icon">
          <div className="checkmark-circle">
            <div className="checkmark">✓</div>
          </div>
        </div>

        {/* Title */}
        <h1>Đặt Hàng Thành Công!</h1>

        <p className="success-desc">
          Cảm ơn bạn đã mua hàng tại hệ thống Build PC.
          Đơn hàng của bạn đã được ghi nhận và đang xử lý.
        </p>

        {/* Info */}
        <div className="success-box">
          <p>Đơn hàng sẽ được xác nhận trong thời gian sớm nhất</p>
          <p>Nhân viên sẽ liên hệ để xác nhận thông tin</p>
          <p>Thời gian giao hàng: 1 - 3 ngày làm việc</p>
        </div>

        {/* Buttons */}
        <div className="success-actions">

          <Link to="/" className="btn-home">
            Về Trang Chủ
          </Link>

          <Link to="/products" className="btn-shop">
            Tiếp Tục Mua Sắm
          </Link>

          <Link to="/order-detail" className="btn-detail">
            Xem Chi Tiết Đơn Hàng
          </Link>

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;