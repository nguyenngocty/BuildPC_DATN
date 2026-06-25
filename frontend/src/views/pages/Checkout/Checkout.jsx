import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
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

            <li className="breadcrumb-item active">
              Thanh toán
            </li>
          </ol>
        </nav>
      </div>

      <div className="checkout-header">
        <h1>Thanh Toán</h1>
        <p>Hoàn tất đơn hàng xây dựng PC của bạn</p>
      </div>

      <div className="checkout-content">
        {/* Left */}
        <div className="checkout-form">
          <h2>Thông tin khách hàng</h2>

          <div className="form-group">
            <label>Họ và tên</label>
            <input type="text" placeholder="Nhập họ tên" />
          </div>

          <div className="form-group">
            <label>Số điện thoại</label>
            <input type="text" placeholder="Nhập số điện thoại" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Nhập email" />
          </div>

          <div className="form-group">
            <label>Địa chỉ nhận hàng</label>
            <textarea placeholder="Nhập địa chỉ"></textarea>
          </div>

          <div className="form-group">
            <label>Ghi chú</label>
            <textarea placeholder="Ghi chú thêm"></textarea>
          </div>

          <h2>Phương thức thanh toán</h2>

          <div className="payment-method">
            <label>
              <input type="radio" name="payment" />
              Thanh toán khi nhận hàng (COD)
            </label>

            <label>
              <input type="radio" name="payment" />
              Chuyển khoản ngân hàng
            </label>

            <label>
              <input type="radio" name="payment" />
              Ví điện tử
            </label>
          </div>

          <button className="checkout-btn">
            Đặt Hàng Ngay
          </button>
        </div>

        {/* Right */}
        <div className="order-summary">
          <h2>Đơn hàng của bạn</h2>

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
            <span>Tổng cộng</span>
            <span>6.660.000đ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;