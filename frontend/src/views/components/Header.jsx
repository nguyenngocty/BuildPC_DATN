function Header() {
  return (
    <>
      <header className="top-header">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <i className="bi bi-telephone-fill"></i> Hotline: <b>1900 1234</b>
          </div>
          <div>
            <i className="bi bi-person-circle"></i> Đăng nhập / Đăng ký
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg main-navbar sticky-top">
        <div className="container">
          <a className="navbar-brand brand" href="/">
            <span className="brand-icon">
              <i className="bi bi-cpu-fill"></i>
            </span>
            <span>
              Build<span>PC</span>
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <div className="search-box mx-lg-4 my-3 my-lg-0">
              <select>
                <option>Tất cả</option>
                <option>CPU</option>
                <option>VGA</option>
                <option>RAM</option>
              </select>
              <input
                type="text"
                placeholder="Tìm CPU Intel i5, VGA RTX 5060..."
              />
              <button>
                <i className="bi bi-search"></i>
              </button>
            </div>

            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Trang chủ
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  data-bs-toggle="dropdown"
                >
                  Sản phẩm
                </a>
                <ul className="dropdown-menu">
                  {[
                    "CPU",
                    "Mainboard",
                    "VGA",
                    "RAM",
                    "SSD",
                    "Nguồn",
                    "Case",
                    "Tản nhiệt",
                    "Màn hình",
                    "Gaming Gear",
                  ].map((item) => (
                    <li key={item}>
                      <a className="dropdown-item" href="/">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Tin tức
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Giới thiệu
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Liên hệ
                </a>
              </li>

              <li className="nav-item">
                <a className="btn build-btn" href="/">
                  Build PC
                </a>
              </li>

              <li className="nav-item icon-link">
                <i className="bi bi-cart3"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
