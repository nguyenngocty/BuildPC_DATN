import { useEffect, useMemo, useRef, useState } from "react";
import "./UserManagement.css";

const PAGE_SIZE = 5;

const initialUsers = [
  {
    id: "USR001",
    name: "Nguyễn Văn An",
    email: "nguyenvanan@gmail.com",
    role: "customer",
    joinedDate: "12/06/2026",
    orderCount: 8,
    status: "active",
    birthDate: "18/04/2002",
    gender: "Nam",
    phone: "0901 234 567",
    address: "Quận Bình Thạnh, TP. Hồ Chí Minh",
    totalSpent: "12.450.000 ₫",
    lastLogin: "26/06/2026, 08:42",
    avatarClass: "avatar-blue",
  },
  {
    id: "USR002",
    name: "Trần Thị Minh Anh",
    email: "minhanh@gmail.com",
    role: "customer",
    joinedDate: "10/06/2026",
    orderCount: 5,
    status: "active",
    birthDate: "22/08/2001",
    gender: "Nữ",
    phone: "0987 654 321",
    address: "Quận 7, TP. Hồ Chí Minh",
    totalSpent: "7.890.000 ₫",
    lastLogin: "25/06/2026, 20:15",
    avatarClass: "avatar-rose",
  },
  {
    id: "USR003",
    name: "Lê Hoàng Nam",
    email: "lehoangnam@gmail.com",
    role: "admin",
    joinedDate: "05/06/2026",
    orderCount: 0,
    status: "active",
    birthDate: "10/11/1998",
    gender: "Nam",
    phone: "0938 111 222",
    address: "Thủ Đức, TP. Hồ Chí Minh",
    totalSpent: "0 ₫",
    lastLogin: "26/06/2026, 09:10",
    avatarClass: "avatar-violet",
  },
  {
    id: "USR004",
    name: "Phạm Quốc Bảo",
    email: "phamquocbao@gmail.com",
    role: "customer",
    joinedDate: "03/06/2026",
    orderCount: 2,
    status: "blocked",
    birthDate: "15/01/2000",
    gender: "Nam",
    phone: "0912 345 678",
    address: "Quận Gò Vấp, TP. Hồ Chí Minh",
    totalSpent: "1.250.000 ₫",
    lastLogin: "18/06/2026, 14:32",
    avatarClass: "avatar-orange",
  },
  {
    id: "USR005",
    name: "Võ Ngọc Hân",
    email: "vongochan@gmail.com",
    role: "customer",
    joinedDate: "01/06/2026",
    orderCount: 12,
    status: "active",
    birthDate: "08/09/2003",
    gender: "Nữ",
    phone: "0978 888 555",
    address: "Quận 1, TP. Hồ Chí Minh",
    totalSpent: "19.600.000 ₫",
    lastLogin: "26/06/2026, 07:28",
    avatarClass: "avatar-teal",
  },
  {
    id: "USR006",
    name: "Đặng Tuấn Kiệt",
    email: "tuan_kiet@gmail.com",
    role: "customer",
    joinedDate: "29/05/2026",
    orderCount: 3,
    status: "active",
    birthDate: "20/03/1999",
    gender: "Nam",
    phone: "0908 765 432",
    address: "Quận Tân Bình, TP. Hồ Chí Minh",
    totalSpent: "4.680.000 ₫",
    lastLogin: "24/06/2026, 19:50",
    avatarClass: "avatar-cyan",
  },
  {
    id: "USR007",
    name: "Bùi Khánh Linh",
    email: "khanhlinh@gmail.com",
    role: "customer",
    joinedDate: "26/05/2026",
    orderCount: 1,
    status: "blocked",
    birthDate: "07/12/2002",
    gender: "Nữ",
    phone: "0966 222 111",
    address: "Quận 3, TP. Hồ Chí Minh",
    totalSpent: "899.000 ₫",
    lastLogin: "12/06/2026, 10:05",
    avatarClass: "avatar-indigo",
  },
];

function getInitials(fullName) {
  return fullName
    .trim()
    .split(" ")
    .slice(-2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

function getRoleLabel(role) {
  return role === "admin" ? "Quản trị viên" : "Khách hàng";
}

function getStatusLabel(status) {
  return status === "active" ? "Hoạt động" : "Đã khóa";
}

function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const toastTimer = useRef(null);

  const filteredUsers = useMemo(() => {
    const keyword = searchKeyword.trim().toLowerCase();

    return users.filter((user) => {
      const matchesKeyword =
        !keyword ||
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword) ||
        user.id.toLowerCase().includes(keyword);

      const matchesRole =
        roleFilter === "all" || user.role === roleFilter;

      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchesKeyword && matchesRole && matchesStatus;
    });
  }, [users, searchKeyword, roleFilter, statusFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / PAGE_SIZE)
  );

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;

    return filteredUsers.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredUsers, currentPage]);

  const stats = useMemo(() => {
    return {
      total: users.length,
      active: users.filter((user) => user.status === "active").length,
      admin: users.filter((user) => user.role === "admin").length,
      blocked: users.filter((user) => user.status === "blocked").length,
    };
  }, [users]);

  const startResult =
    filteredUsers.length === 0
      ? 0
      : (currentPage - 1) * PAGE_SIZE + 1;

  const endResult = Math.min(
    currentPage * PAGE_SIZE,
    filteredUsers.length
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchKeyword, roleFilter, statusFilter]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setSelectedUser(null);
      }
    }

    if (selectedUser) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedUser]);

  useEffect(() => {
    return () => {
      window.clearTimeout(toastTimer.current);
    };
  }, []);

  function showToast(message) {
    setToastMessage(message);

    window.clearTimeout(toastTimer.current);

    toastTimer.current = window.setTimeout(() => {
      setToastMessage("");
    }, 3000);
  }

  function updateUser(id, field, value) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );

    setSelectedUser((currentSelectedUser) => {
      if (!currentSelectedUser || currentSelectedUser.id !== id) {
        return currentSelectedUser;
      }

      return {
        ...currentSelectedUser,
        [field]: value,
      };
    });

    const updatedUser = users.find((user) => user.id === id);

    if (field === "role") {
      showToast(
        `Đã đổi vai trò của ${updatedUser?.name || "người dùng"}.`
      );
    }

    if (field === "status") {
      showToast(
        `Đã cập nhật trạng thái của ${updatedUser?.name || "người dùng"}.`
      );
    }
  }

  function handleAddUser() {
    showToast("Chức năng thêm người dùng sẽ được tích hợp sau.");
  }

  return (
    <>
      <div className="user-management-page">
        <section className="user-page-heading">
          <div>
            <span className="page-kicker">Tài khoản</span>
            <h1>Quản lý người dùng</h1>
            <p>
              Theo dõi thông tin, cập nhật vai trò và trạng thái tài khoản
              trong hệ thống.
            </p>
          </div>

          <button
            className="primary-action"
            type="button"
            onClick={handleAddUser}
          >
            <i className="bi bi-person-plus-fill"></i>
            Thêm người dùng
          </button>
        </section>

        <section className="user-stat-grid" aria-label="Thống kê người dùng">
          <article className="user-stat-card stat-card-blue">
            <span className="stat-icon icon-blue">
              <i className="bi bi-people-fill"></i>
            </span>

            <div>
              <span className="stat-label">Tổng người dùng</span>
              <strong>{stats.total}</strong>
              <small className="stat-description-blue">
                Tất cả tài khoản
              </small>
            </div>
          </article>

          <article className="user-stat-card stat-card-green">
            <span className="stat-icon icon-green">
              <i className="bi bi-person-check-fill"></i>
            </span>

            <div>
              <span className="stat-label">Đang hoạt động</span>
              <strong>{stats.active}</strong>
              <small className="stat-description-green">
                Có thể truy cập
              </small>
            </div>
          </article>

          <article className="user-stat-card stat-card-yellow">
            <span className="stat-icon icon-yellow">
              <i className="bi bi-person-gear"></i>
            </span>

            <div>
              <span className="stat-label">Quản trị viên</span>
              <strong>{stats.admin}</strong>
              <small className="stat-description-yellow">
                Đã cấp quyền quản trị
              </small>
            </div>
          </article>

          <article className="user-stat-card stat-card-red">
            <span className="stat-icon icon-red">
              <i className="bi bi-person-x-fill"></i>
            </span>

            <div>
              <span className="stat-label">Đã khóa</span>
              <strong>{stats.blocked}</strong>
              <small className="stat-description-red">
                Đã khóa quyền truy cập
              </small>
            </div>
          </article>
        </section>

        <section className="admin-panel user-list-panel">
          <div className="panel-head user-list-head">
            <div>
              <h2>Danh sách người dùng</h2>
              <p>
                {filteredUsers.length === 0
                  ? "Không tìm thấy người dùng phù hợp."
                  : `Tìm thấy ${filteredUsers.length} người dùng phù hợp.`}
              </p>
            </div>

            <div className="user-toolbar">
              <label className="toolbar-search">
                <i className="bi bi-search"></i>

                <input
                  type="search"
                  value={searchKeyword}
                  onChange={(event) =>
                    setSearchKeyword(event.target.value)
                  }
                  placeholder="Tên, email hoặc mã người dùng"
                  autoComplete="off"
                  aria-label="Tìm người dùng"
                />
              </label>

              <select
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value)}
                aria-label="Lọc theo vai trò"
              >
                <option value="all">Tất cả vai trò</option>
                <option value="customer">Khách hàng</option>
                <option value="admin">Quản trị viên</option>
              </select>

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                aria-label="Lọc theo trạng thái"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="active">Hoạt động</option>
                <option value="blocked">Đã khóa</option>
              </select>
            </div>
          </div>

          <div className="user-table-wrap">
            <table className="admin-table user-table">
              <thead>
                <tr>
                  <th>Mã người dùng</th>
                  <th>Người dùng</th>
                  <th>Vai trò</th>
                  <th>Ngày tham gia</th>
                  <th>Đơn hàng</th>
                  <th>Trạng thái</th>
                  <th className="user-actions-heading">Thao tác</th>
                </tr>
              </thead>

              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <span className="user-code">{user.id}</span>
                    </td>

                    <td>
                      <div className="user-identity">
                        <span
                          className={`user-avatar ${user.avatarClass}`}
                          aria-hidden="true"
                        >
                          <span className="avatar-fallback">
                            {getInitials(user.name)}
                          </span>
                        </span>

                        <div>
                          <strong>{user.name}</strong>
                          <span className="user-email">{user.email}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <select
                        className={`inline-select role-select role-${user.role}`}
                        value={user.role}
                        onChange={(event) =>
                          updateUser(
                            user.id,
                            "role",
                            event.target.value
                          )
                        }
                        aria-label={`Vai trò của ${user.name}`}
                      >
                        <option value="customer">Khách hàng</option>
                        <option value="admin">Quản trị viên</option>
                      </select>
                    </td>

                    <td>{user.joinedDate}</td>

                    <td>{user.orderCount}</td>

                    <td>
                      <select
                        className={`inline-select status-select status-${user.status}`}
                        value={user.status}
                        onChange={(event) =>
                          updateUser(
                            user.id,
                            "status",
                            event.target.value
                          )
                        }
                        aria-label={`Trạng thái của ${user.name}`}
                      >
                        <option value="active">Hoạt động</option>
                        <option value="blocked">Đã khóa</option>
                      </select>
                    </td>

                    <td className="user-actions-cell">
                      <button
                        className="action-view"
                        type="button"
                        onClick={() => setSelectedUser(user)}
                        title={`Xem chi tiết ${user.name}`}
                        aria-label={`Xem chi tiết ${user.name}`}
                      >
                        <i className="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <div className="empty-state">
                <span>
                  <i className="bi bi-people"></i>
                </span>

                <h3>Không tìm thấy người dùng phù hợp</h3>
                <p>Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc.</p>
              </div>
            )}
          </div>

          <div className="table-footer">
            <span>
              {filteredUsers.length === 0
                ? "Hiển thị 0 kết quả"
                : `Hiển thị ${startResult}–${endResult} trong tổng số ${filteredUsers.length} người dùng`}
            </span>

            {totalPages > 1 && (
              <nav
                className="pagination-nav"
                aria-label="Phân trang người dùng"
              >
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  aria-label="Trang trước"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={page === currentPage ? "active" : ""}
                    onClick={() => setCurrentPage(page)}
                    aria-label={`Trang ${page}`}
                    aria-current={
                      page === currentPage ? "page" : undefined
                    }
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((current) =>
                      Math.min(totalPages, current + 1)
                    )
                  }
                  aria-label="Trang sau"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </nav>
            )}
          </div>
        </section>
      </div>

      {selectedUser && (
        <div
          className="user-modal user-modal-react"
          role="dialog"
          aria-modal="true"
          aria-labelledby="userDetailModalLabel"
          onMouseDown={() => setSelectedUser(null)}
        >
          <div
            className="modal-dialog"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <span className="modal-kicker">Hồ sơ tài khoản</span>
                  <h2 className="modal-title" id="userDetailModalLabel">
                    Chi tiết người dùng
                  </h2>
                </div>

                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setSelectedUser(null)}
                  aria-label="Đóng cửa sổ chi tiết"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>

              <div className="modal-body">
                <section className="detail-profile-card">
                  <span
                    className={`detail-avatar ${selectedUser.avatarClass}`}
                    aria-hidden="true"
                  >
                    {getInitials(selectedUser.name)}
                  </span>

                  <div className="detail-profile-content">
                    <div className="detail-profile-main">
                      <h3>{selectedUser.name}</h3>
                      <p>{selectedUser.email}</p>
                    </div>

                    <div className="detail-badge-group">
                      <span
                        className={`role-badge role-${selectedUser.role}`}
                      >
                        {getRoleLabel(selectedUser.role)}
                      </span>

                      <span
                        className={`user-status status-${selectedUser.status}`}
                      >
                        {getStatusLabel(selectedUser.status)}
                      </span>
                    </div>
                  </div>
                </section>

                <div className="detail-grid">
                  <section className="detail-section">
                    <h3>
                      <i className="bi bi-person-vcard"></i>
                      Thông tin cá nhân
                    </h3>

                    <dl className="detail-list">
                      <div>
                        <dt>Mã người dùng</dt>
                        <dd>{selectedUser.id}</dd>
                      </div>

                      <div>
                        <dt>Họ và tên</dt>
                        <dd>{selectedUser.name}</dd>
                      </div>

                      <div>
                        <dt>Ngày sinh</dt>
                        <dd>{selectedUser.birthDate}</dd>
                      </div>

                      <div>
                        <dt>Giới tính</dt>
                        <dd>{selectedUser.gender}</dd>
                      </div>
                    </dl>
                  </section>

                  <section className="detail-section">
                    <h3>
                      <i className="bi bi-telephone"></i>
                      Liên hệ
                    </h3>

                    <dl className="detail-list">
                      <div>
                        <dt>Email</dt>
                        <dd>{selectedUser.email}</dd>
                      </div>

                      <div>
                        <dt>Số điện thoại</dt>
                        <dd>{selectedUser.phone}</dd>
                      </div>

                      <div className="detail-list-wide">
                        <dt>Địa chỉ</dt>
                        <dd>{selectedUser.address}</dd>
                      </div>
                    </dl>
                  </section>

                  <section className="detail-section detail-section-wide">
                    <h3>
                      <i className="bi bi-activity"></i>
                      Hoạt động tài khoản
                    </h3>

                    <div className="activity-summary">
                      <div>
                        <span>Ngày tham gia</span>
                        <strong>{selectedUser.joinedDate}</strong>
                      </div>

                      <div>
                        <span>Đơn hàng đã đặt</span>
                        <strong>{selectedUser.orderCount}</strong>
                      </div>

                      <div>
                        <span>Tổng chi tiêu</span>
                        <strong>{selectedUser.totalSpent}</strong>
                      </div>

                      <div>
                        <span>Đăng nhập gần nhất</span>
                        <strong>{selectedUser.lastLogin}</strong>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="ghost-action"
                  onClick={() => setSelectedUser(null)}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`save-toast ${toastMessage ? "show" : ""}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <i className="bi bi-check-circle-fill"></i>
        <span>{toastMessage}</span>
      </div>
    </>
  );
}

export default UserManagement;