import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <i className="bi bi-telephone-fill"></i>
            <span>
              Hotline: <b>1900 1234</b>
            </span>
          </div>

          <div className="topbar-right">
            <i className="bi bi-person-circle"></i>
            <span>Đăng nhập</span>
            <span className="divider">/</span>
            <span>Đăng ký</span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <nav className="navbar">
        <div className="container navbar-inner">
          {/* BRAND */}
          <Link className="brand" to="/">
            <span className="brand-icon">
              <i className="bi bi-cpu-fill"></i>
            </span>
            <span className="brand-text">
              Build<span>PC</span>
            </span>
          </Link>
          {/* SEARCH */}
          <div className="pc-search">
            <div className="pc-search__filter">
              <select className="pc-search__select">
                <option>Tất cả</option>
                <option>CPU</option>
                <option>VGA</option>
                <option>RAM</option>
                <option>Mainboard</option>
                <option>SSD</option>
              </select>
            </div>

            <input
              name="search"
              type="text"
              className="pc-search__input"
              placeholder="Tìm CPU Intel i5, VGA RTX 5060..."
            />
            <button className="pc-search__btn">
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* MENU */}
          <ul className="menu">
            <li>
              <NavLink to="/" className="nav-link">
                Trang chủ
              </NavLink>
            </li>

            <li className="dropdown">
              <span className="nav-link">Sản phẩm</span>

              <div className="dropdown-menu">
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
                  <Link key={item} to="/" className="dropdown-item">
                    {item}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <NavLink to="/" className="nav-link">
                Tin tức
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className="nav-link">
                Giới thiệu
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className="nav-link">
                Liên hệ
              </NavLink>
            </li>

            <li>
              <NavLink to="/build-pc" className="build-btn">
                <i className="bi bi-pc-display"></i>
                <span>Build PC</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/cart" className="cart">
                <i className="bi bi-cart3"></i>
                <span className="cart-count">3</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
