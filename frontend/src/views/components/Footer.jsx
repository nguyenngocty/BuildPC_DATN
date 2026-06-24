function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h4>BuildPC</h4>
            <p>Build PC theo ý bạn - Linh kiện chính hãng, giá tốt nhất.</p>
          </div>

          <div className="col-md-2">
            <h6>Chính sách</h6>
            <p>Bảo hành</p>
            <p>Đổi trả</p>
            <p>Thanh toán</p>
          </div>

          <div className="col-md-3">
            <h6>Hỗ trợ</h6>
            <p>Tra cứu đơn hàng</p>
            <p>Tư vấn build PC</p>
            <p>Liên hệ</p>
          </div>

          <div className="col-md-3">
            <h6>Nhận ưu đãi</h6>
            <div className="newsletter">
              <input placeholder="Email của bạn..." />
              <button>Đăng ký</button>
            </div>
          </div>
        </div>

        <hr />
        <p className="copyright">© 2026 BuildPC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
