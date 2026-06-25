function AdminDashboard() {
  return (
    <>
      <section className="dashboard-heading">
        <div>
          <span className="page-kicker">Dashboard</span>

          <h1>
            <i className="bi bi-speedometer2" /> Tổng quan hệ thống
          </h1>

          <p>
            Theo dõi nhanh doanh thu, đơn hàng và tình trạng sản phẩm.
          </p>
        </div>

        <button className="primary-action" type="button">
          <i className="bi bi-plus-circle" /> Tạo sản phẩm
        </button>
      </section>

      <section className="stats-grid" aria-label="Chỉ số nhanh">
        <article className="stat-card">
          <div className="stat-icon">
            <i className="bi bi-cash-stack" />
          </div>

          <span>Doanh thu</span>

          <strong>128.500.000đ</strong>

          <small className="up">
            <i className="bi bi-arrow-up" /> +12.4% so với tháng trước
          </small>
        </article>

        <article className="stat-card">
          <div className="stat-icon">
            <i className="bi bi-cart-check" />
          </div>

          <span>Đơn hàng</span>

          <strong>1.284</strong>

          <small className="up">
            <i className="bi bi-arrow-up" /> +8.2% tuần này
          </small>
        </article>

        <article className="stat-card">
          <div className="stat-icon">
            <i className="bi bi-people-fill" />
          </div>

          <span>Khách hàng</span>

          <strong>842</strong>

          <small className="up">
            <i className="bi bi-person-plus" /> +36 tài khoản mới
          </small>
        </article>

        <article className="stat-card">
          <div className="stat-icon">
            <i className="bi bi-exclamation-triangle-fill" />
          </div>

          <span>Sản phẩm sắp hết</span>

          <strong>18</strong>

          <small className="down">
            <i className="bi bi-exclamation-circle" /> Cần kiểm tra kho
          </small>
        </article>
      </section>

      <div className="dashboard-grid">
        <section className="admin-panel revenue-panel">
          <div className="panel-head">
            <div>
              <h2>
                <i className="bi bi-graph-up-arrow" /> Doanh thu 7 ngày
              </h2>

              <p>Biểu đồ demo bằng CSS, dễ thay bằng chart thật.</p>
            </div>

            <select aria-label="Lọc doanh thu">
              <option>7 ngày</option>
              <option>30 ngày</option>
              <option>90 ngày</option>
            </select>
          </div>

          <div className="bar-chart" aria-label="Biểu đồ doanh thu">
            <div style={{ "--value": 55 }}>
              <span>T2</span>
            </div>

            <div style={{ "--value": 72 }}>
              <span>T3</span>
            </div>

            <div style={{ "--value": 46 }}>
              <span>T4</span>
            </div>

            <div style={{ "--value": 88 }}>
              <span>T5</span>
            </div>

            <div style={{ "--value": 64 }}>
              <span>T6</span>
            </div>

            <div style={{ "--value": 94 }}>
              <span>T7</span>
            </div>

            <div style={{ "--value": 78 }}>
              <span>CN</span>
            </div>
          </div>
        </section>

        <section className="admin-panel">
          <div className="panel-head">
            <div>
              <h2>
                <i className="bi bi-boxes" /> Trạng thái kho
              </h2>

              <p>Các nhóm sản phẩm cần chú ý.</p>
            </div>
          </div>

          <div className="stock-list">
            <div>
              <span>
                <i className="bi bi-check-circle-fill text-success" /> Còn hàng
              </span>

              <strong>246</strong>
            </div>

            <div>
              <span>
                <i className="bi bi-exclamation-circle-fill text-warning" /> Sắp hết
              </span>

              <strong>18</strong>
            </div>

            <div>
              <span>
                <i className="bi bi-pause-circle-fill text-secondary" /> Tạm ẩn
              </span>

              <strong>9</strong>
            </div>
          </div>
        </section>
      </div>

      <section className="admin-panel">
        <div className="panel-head">
          <div>
            <h2>
              <i className="bi bi-receipt" /> Đơn hàng gần đây
            </h2>

            <p>Danh sách đơn hàng mới nhất trong hệ thống.</p>
          </div>

          <button className="ghost-action" type="button">
            <i className="bi bi-arrow-right-circle" /> Xem tất cả
          </button>
        </div>

        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Khách hàng</th>
                <th>Sản phẩm</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#DH1024</td>
                <td>Nguyễn An</td>
                <td>Gemini Pro 5TB</td>
                <td>150.000đ</td>
                <td>
                  <span className="status paid">
                    <i className="bi bi-check-circle-fill" />
                    Đã thanh toán
                  </span>
                </td>
              </tr>

              <tr>
                <td>#DH1023</td>
                <td>Trần Minh</td>
                <td>AI Tools Premium</td>
                <td>198.000đ</td>
                <td>
                  <span className="status pending">
                    <i className="bi bi-hourglass-split" />
                    Đang xử lý
                  </span>
                </td>
              </tr>

              <tr>
                <td>#DH1022</td>
                <td>Lê Hương</td>
                <td>ChatGPT Plus Share</td>
                <td>79.000đ</td>
                <td>
                  <span className="status cancel">
                    <i className="bi bi-x-circle-fill" />
                    Đã hủy
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminDashboard;