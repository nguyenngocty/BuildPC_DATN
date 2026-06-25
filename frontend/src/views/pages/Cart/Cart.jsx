import { useMemo, useState } from "react";
import "./css/style.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gemini Pro 5TB",
      description: "Gói 1 năm - Anti + Flow",
      price: 150000,
      quantity: 1,
      badge: "Đang giảm giá",
      badgeClass: "",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=240&q=80",
      alt: "Tài khoản Gemini Pro",
    },
    {
      id: 2,
      name: "AI Tools Premium",
      description: "Tài khoản dùng chung, hỗ trợ nhanh",
      price: 99000,
      quantity: 2,
      badge: "Phổ biến",
      badgeClass: "blue",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=240&q=80",
      alt: "AI Tools Premium",
    },
    {
      id: 3,
      name: "ChatGPT Plus Share",
      description: "Gói 1 tháng, kích hoạt trong ngày",
      price: 79000,
      quantity: 1,
      badge: "Mới",
      badgeClass: "yellow",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=240&q=80",
      alt: "ChatGPT Plus",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [discount, setDiscount] = useState(0);

  const formatPrice = (price) => {
    return `${price.toLocaleString("vi-VN")}đ`;
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  const grandTotal = subtotal - discount;

  const updateQuantity = (id, action) => {
    setCartItems((previousItems) =>
      previousItems.map((item) => {
        if (item.id !== id) {
          return item;
        }

        if (action === "increase") {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        if (action === "decrease" && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscount(0);
    setCouponCode("");
    setCouponMessage("");
  };

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    if (code === "GIAM10") {
      const discountAmount = Math.round(subtotal * 0.1);

      setDiscount(discountAmount);
      setCouponMessage("Áp dụng mã GIAM10 thành công: giảm 10%.");
      return;
    }

    if (!code) {
      setDiscount(0);
      setCouponMessage("Vui lòng nhập mã giảm giá.");
      return;
    }

    setDiscount(0);
    setCouponMessage("Mã giảm giá không hợp lệ.");
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Giỏ hàng đang trống.");
      return;
    }

    console.log("Dữ liệu thanh toán:", {
      cartItems,
      subtotal,
      discount,
      grandTotal,
    });

    alert("Bạn đã bấm Thanh toán. Bước sau mình sẽ nối sang trang thanh toán.");
  };

  return (
    <main className="cart-page">
      <div className="container py-5">
        <nav aria-label="breadcrumb" className="cart-breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">Trang chủ</a>
            </li>

            <li className="breadcrumb-item">
              <a href="/shop">Cửa hàng</a>
            </li>

            <li
              className="breadcrumb-item active"
              aria-current="page"
            >
              Giỏ hàng
            </li>
          </ol>
        </nav>

        <div className="cart-title mb-4">
          <span className="cart-kicker">Giỏ hàng</span>
          <h1 className="mb-2">Kiểm tra đơn hàng của bạn</h1>
          <p className="mb-0">
            Cập nhật số lượng, áp mã ưu đãi và xem tổng tiền trước khi thanh
            toán.
          </p>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-lg-8">
            <section className="cart-panel">
              <div className="cart-panel-head">
                <div>
                  <h2>Sản phẩm</h2>
                  <p className="mb-0">
                    <span>{cartItems.length}</span> sản phẩm trong giỏ
                  </p>
                </div>

                <button
                  className="btn-clear"
                  type="button"
                  onClick={clearCart}
                >
                  Xóa tất cả
                </button>
              </div>

              <div className="cart-list">
                {cartItems.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="product-img"
                    />

                    <div className="product-info">
                      <span
                        className={`sale-badge ${item.badgeClass}`}
                      >
                        {item.badge}
                      </span>

                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>

                    <div
                      className="qty-control"
                      aria-label="Chọn số lượng"
                    >
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, "decrease")
                        }
                      >
                        -
                      </button>

                      <input
                        className="qty-input"
                        type="text"
                        value={item.quantity}
                        readOnly
                        aria-label="Số lượng"
                      />

                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, "increase")
                        }
                      >
                        +
                      </button>
                    </div>

                    <strong className="item-total">
                      {formatPrice(item.price * item.quantity)}
                    </strong>

                    <button
                      className="remove-btn"
                      type="button"
                      aria-label={`Xóa ${item.name}`}
                      onClick={() => removeItem(item.id)}
                    >
                      x
                    </button>
                  </article>
                ))}
              </div>

              {cartItems.length === 0 && (
                <div className="empty-cart">
                  <h3>Giỏ hàng đang trống</h3>
                  <p className="mb-0">
                    Hãy thêm sản phẩm để tiếp tục thanh toán.
                  </p>
                </div>
              )}
            </section>
          </div>

          <div className="col-lg-4">
            <aside className="cart-panel summary-panel">
              <h2>Tóm tắt đơn hàng</h2>

              <div className="coupon-box">
                <label className="form-label" htmlFor="couponInput">
                  Mã giảm giá
                </label>

                <div className="input-group">
                  <input
                    className="form-control"
                    id="couponInput"
                    type="text"
                    placeholder="Nhập mã"
                    value={couponCode}
                    onChange={(event) => setCouponCode(event.target.value)}
                  />

                  <button
                    className="btn coupon-btn"
                    type="button"
                    onClick={applyCoupon}
                  >
                    Áp dụng
                  </button>
                </div>

                <small>{couponMessage}</small>
              </div>

              <div className="summary-list">
                <div className="summary-row">
                  <span>Tạm tính</span>
                  <strong>{formatPrice(subtotal)}</strong>
                </div>

                <div className="summary-row">
                  <span>Giảm giá</span>
                  <strong>{formatPrice(discount)}</strong>
                </div>

                <div className="summary-row">
                  <span>Phí dịch vụ</span>
                  <strong>Miễn phí</strong>
                </div>
              </div>

              <div className="summary-total">
                <span>Tổng thanh toán</span>
                <strong>{formatPrice(grandTotal)}</strong>
              </div>

              <button
                className="btn checkout-btn w-100"
                type="button"
                onClick={handleCheckout}
              >
                Thanh toán
              </button>

              <a className="btn continue-btn w-100" href="/shop">
                Tiếp tục mua hàng
              </a>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;