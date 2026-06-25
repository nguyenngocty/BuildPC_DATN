import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const topMenuItems = [
  {
    label: "Dashboard",
    to: "/admin",
    end: true,
  },
  {
    label: "Đơn hàng",
    to: "/admin/orders",
  },
  {
    label: "Sản phẩm",
    to: "/admin/products",
  },
  {
    label: "Khách hàng",
    to: "/admin/customers",
  },
];

function AdminTopbar({
  isAccountOpen,
  onToggleSidebar,
  onToggleAccount,
  onCloseAccount,
  onOpenAccountInfo,
  onOpenLogout,
}) {
  const accountMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isAccountOpen &&
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target)
      ) {
        onCloseAccount();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAccountOpen, onCloseAccount]);

  return (
    <header className="admin-topbar">
      <div className="topbar-left">
        <button
          className="sidebar-toggle"
          type="button"
          onClick={onToggleSidebar}
          aria-label="Thu gọn menu"
        >
          <i className="bi bi-list" />
        </button>

        <NavLink className="admin-brand" to="/admin" end>
          <span className="brand-mark">
            <i className="bi bi-speedometer2" />
          </span>

          <span>Admin</span>
        </NavLink>
      </div>

      <nav className="top-menu" aria-label="Menu ngang">
        {topMenuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="topbar-actions">
        <div className="admin-search">
          <input type="search" placeholder="Tìm kiếm..." />
        </div>

        <button
          className="icon-btn"
          type="button"
          aria-label="Thông báo"
        >
          <i className="bi bi-bell-fill" />
        </button>

        <div className="account-dropdown" ref={accountMenuRef}>
          <button
            className={`admin-user ${isAccountOpen ? "active" : ""}`}
            type="button"
            onClick={onToggleAccount}
            aria-expanded={isAccountOpen}
            aria-haspopup="true"
            aria-controls="accountMenu"
          >
            <span className="admin-avatar">
              <i className="bi bi-person-fill" />
            </span>

            <strong>Admin</strong>

            <i
              className="bi bi-chevron-down user-chevron"
              aria-hidden="true"
            />
          </button>

          <div
            className={`account-menu ${isAccountOpen ? "show" : ""}`}
            id="accountMenu"
            role="menu"
            aria-label="Menu tài khoản"
          >
            <div className="account-menu-header">
              <span className="account-menu-avatar">A</span>

              <div>
                <strong>Admin</strong>
                <small>Quản trị viên</small>
              </div>
            </div>

            <div className="account-menu-divider" />

            <button
              className="account-menu-item"
              type="button"
              onClick={onOpenAccountInfo}
              role="menuitem"
            >
              <i className="bi bi-person-vcard" />
              <span>Thông tin tài khoản</span>
            </button>

            <button
              className="account-menu-item logout-item"
              type="button"
              onClick={onOpenLogout}
              role="menuitem"
            >
              <i className="bi bi-box-arrow-right" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminTopbar;