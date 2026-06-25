import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    /*
      Sau này:
      1. Validate thông tin khách hàng
      2. Gọi API tạo đơn hàng
      3. Xóa giỏ hàng nếu đặt thành công
    */

    // localStorage.removeItem("cart");

    navigate("/order-success");
  };

  return (
    <div className="checkout-container">
      {/* Breadcrumb */}
      <div className="cart-breadcrumb">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>

            <li className="breadcrumb-item">
              <Link to="/cart">Giỏ hàng</Link>
            </li>

            <li className="breadcrumb-item active">Thanh toán</li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="checkout-header">
        <h1>Xác Nhận Đơn Hàng</h1>
        <p>
          Vui lòng kiểm tra thông tin nhận hàng và phương thức thanh toán
          trước khi hoàn tất đơn hàng.
        </p>
      </div>

      <div className="checkout-content">
        {/* Form khách hàng */}
        <div className="checkout-form">
          <h2>Thông Tin Nhận Hàng</h2>

          <div className="form-group">
            <label>Họ và tên người nhận</label>
            <input type="text" placeholder="Nguyễn Văn A" />
          </div>

          <div className="form-group">
            <label>Số điện thoại liên hệ</label>
            <input type="text" placeholder="09xxxxxxxx" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>

          <div className="form-group">
            <label>Địa chỉ giao hàng</label>
            <textarea placeholder="Nhập địa chỉ nhận hàng..." />
          </div>

          <div className="form-group">
            <label>Ghi chú cho đơn hàng (không bắt buộc)</label>
            <textarea placeholder="Ví dụ: Giao hàng giờ hành chính..." />
          </div>

          <h2>Hình Thức Thanh Toán</h2>

          <div className="payment-method">
            <label>
              <input type="radio" name="payment" defaultChecked />
              <span> Thanh toán khi nhận hàng (COD)</span>
            </label>

            <label>
              <input type="radio" name="payment" />
              <span> Chuyển khoản ngân hàng</span>
            </label>

            <label>
              <input type="radio" name="payment" />
              <span> Thanh toán qua ví điện tử (MoMo, ZaloPay)</span>
            </label>
          </div>

          <button
            type="button"
            className="checkout-btn"
            onClick={handleCheckout}
          >
            Đặt Hàng Ngay
          </button>
        </div>

        {/* Đơn hàng */}
        <div className="order-summary">
          <h2>Chi Tiết Đơn Hàng</h2>

          <div className="product-item">
            <span>CPU AMD Ryzen 5 5600</span>
            <span>3.290.000đ</span>
          </div>

          <div className="product-item">
            <span>Mainboard B550M</span>
            <span>2.190.000đ</span>
          </div>

          <div className="product-item">
            <span>RAM 16GB DDR4</span>
            <span>1.250.000đ</span>
          </div>

          <hr />

          <div className="summary-row">
            <span>Tạm tính</span>
            <span>6.730.000đ</span>
          </div>

          <div className="summary-row">
            <span>Giảm giá</span>
            <span>-100.000đ</span>
          </div>

          <div className="summary-row">
            <span>Phí vận chuyển</span>
            <span>30.000đ</span>
          </div>

          <div className="summary-row total">
            <span>Tổng thanh toán</span>
            <span>6.660.000đ</span>
          </div>

          <Link
            to="/cart"
            className="summary-btn"
            style={{ textDecoration: "none" }}
          >
            Xem lại giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;