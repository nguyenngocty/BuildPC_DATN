import React from "react";
import { Link } from "react-router-dom";
import './PostManagement.css';

const PostManagement = () => {
  return (
    <div className="admin-post-management">
      {/* Header Section */}
      <div className="page-header">
        <div className="header-title">
          <h2>Quản lý bài viết</h2>
          <p>Manage blog posts, announcements, and technical guides.</p>
        </div>
        <Link to="/admin/posts/create" className="btn-create-post" style={{ textDecoration: 'none' }}>
          <i className="bi bi-plus-lg"></i> Tạo bài viết mới
        </Link>
      </div>

      {/* Filter Section */}
      <div className="filter-bar">
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Tìm kiếm bài viết..." />
        </div>
        <div className="filter-actions">
          <select className="filter-select">
            <option>Tất cả danh mục</option>
            <option>Hướng dẫn</option>
            <option>Đánh giá</option>
            <option>Tin tức</option>
          </select>
          <select className="filter-select">
            <option>Tất cả trạng thái</option>
            <option>Đã xuất bản</option>
            <option>Bản nháp</option>
          </select>
        </div>
      </div>

      {/* Data Table Section */}
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Tiêu đề</th>
              <th>Tác giả</th>
              <th>Danh mục</th>
              <th>Ngày đăng</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>
                <div className="post-info">
                  <div className="post-thumb thumb-red"></div>
                  <div className="post-meta">
                    <h4>Hướng dẫn build PC 20 triệu...</h4>
                    <span>
                      <i className="bi bi-eye"></i> 1.2k views
                    </span>
                  </div>
                </div>
              </td>
              <td>Admin ForgePC</td>
              <td>
                <span className="category-tag">Hướng dẫn</span>
              </td>
              <td>15/10/2023</td>
              <td>
                <span className="status-badge published">• Đã xuất bản</span>
              </td>
              <td>
                <div className="action-btns">
                  <Link to="/admin/posts/edit/1" className="btn-icon edit-btn">
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <button className="btn-icon delete-btn">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>
                <div className="post-info">
                  <div className="post-thumb thumb-pink"></div>
                  <div className="post-meta">
                    <h4>Đánh giá chi tiết Intel Core i9...</h4>
                    <span>-</span>
                  </div>
                </div>
              </td>
              <td>Nguyễn Văn A</td>
              <td>
                <span className="category-tag">Đánh giá</span>
              </td>
              <td>18/10/2023</td>
              <td>
                <span className="status-badge draft">• Bản nháp</span>
              </td>
              <td>
                <div className="action-btns">
                  <Link to="/admin/posts/edit/2" className="btn-icon edit-btn">
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <button className="btn-icon delete-btn">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>
                <div className="post-info">
                  <div className="post-thumb thumb-dark"></div>
                  <div className="post-meta">
                    <h4>Top 5 Card Đồ Họa Đáng Mua...</h4>
                    <span>
                      <i className="bi bi-eye"></i> 2.4k views
                    </span>
                  </div>
                </div>
              </td>
              <td>Admin ForgePC</td>
              <td>
                <span className="category-tag">Tin tức</span>
              </td>
              <td>10/10/2023</td>
              <td>
                <span className="status-badge published">• Đã xuất bản</span>
              </td>
              <td>
                <div className="action-btns">
                  <Link to="/admin/posts/edit/3" className="btn-icon edit-btn">
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <button className="btn-icon delete-btn">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="pagination-wrapper">
        <span className="pagination-info">Hiển thị 1-3 của 24 bài viết</span>
        <div className="pagination-controls">
          <button className="page-btn">&lt;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="page-dots">...</span>
          <button className="page-btn">8</button>
          <button className="page-btn">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default PostManagement;