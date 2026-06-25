import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import AdminTopbar from "../components/AdminTopbar";
import AdminSidebar from "../components/AdminSidebar";
import LogoutModal from "../components/LogoutModal";
import "../styles/Admin.css";
function AdminLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleToggleSidebar = () => {
    const isMobile = window.innerWidth <= 991.98;

    if (isMobile) {
      setIsSidebarOpen((current) => !current);
      return;
    }

    setIsSidebarCollapsed((current) => !current);
  };

  const handleToggleAccount = () => {
    setIsAccountOpen((current) => !current);
  };

  const handleCloseAccount = () => {
    setIsAccountOpen(false);
  };

  const handleOpenAccountInfo = () => {
    setIsAccountOpen(false);

    // Sau này thay bằng navigate("/admin/profile")
    window.alert("Chức năng thông tin tài khoản sẽ được làm sau.");
  };

  const handleOpenLogout = () => {
    setIsAccountOpen(false);
    setIsLogoutOpen(true);
  };

  const handleCloseLogout = () => {
    setIsLogoutOpen(false);
  };

  const handleConfirmLogout = () => {
    setIsLogoutOpen(false);

    /*
      Sau này khi tích hợp đăng nhập:
      - Xóa token trong localStorage
      - Gọi logout từ AuthContext
      - navigate("/login")
    */
    window.alert("Chức năng đăng xuất sẽ được tích hợp sau.");
  };

  const handleNavigate = () => {
    if (window.innerWidth <= 991.98) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("logout-modal-open", isLogoutOpen);

    return () => {
      document.body.classList.remove("logout-modal-open");
    };
  }, [isLogoutOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") {
        return;
      }

      if (isLogoutOpen) {
        setIsLogoutOpen(false);
        return;
      }

      setIsAccountOpen(false);
      setIsSidebarOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLogoutOpen]);

  return (
    <div
      className={[
        "admin-layout",
        isSidebarCollapsed && "sidebar-collapsed",
        isSidebarOpen && "sidebar-open",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <AdminTopbar
        isAccountOpen={isAccountOpen}
        onToggleSidebar={handleToggleSidebar}
        onToggleAccount={handleToggleAccount}
        onCloseAccount={handleCloseAccount}
        onOpenAccountInfo={handleOpenAccountInfo}
        onOpenLogout={handleOpenLogout}
      />

      <AdminSidebar onNavigate={handleNavigate} />

      <main className="admin-main">
        <Outlet />
      </main>

      <LogoutModal
        isOpen={isLogoutOpen}
        onClose={handleCloseLogout}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
}

export default AdminLayout;