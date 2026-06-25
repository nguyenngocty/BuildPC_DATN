import { useState } from "react";

function ProductManagement() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const products = [];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <section className="admin-page">
      <div className="admin-page-heading">
        <div>
          <p className="admin-page-eyebrow">QUẢN LÝ CỬA HÀNG</p>
          <h1>Quản lý sản phẩm</h1>
          <p>Thêm, chỉnh sửa, ẩn hoặc quản lý danh sách sản phẩm.</p>
        </div>

        <button
          type="button"
          className="admin-primary-button"
          onClick={() =>
            window.alert("Chức năng thêm sản phẩm sẽ được làm sau.")
          }
        >
          + Thêm sản phẩm
        </button>
      </div>

      <div className="admin-panel">
        <div className="admin-toolbar">
          <div className="admin-search-box">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchKeyword}
              onChange={(event) => setSearchKeyword(event.target.value)}
            />
          </div>

          <select className="admin-select" defaultValue="all">
            <option value="all">Tất cả danh mục</option>
            <option value="cpu">CPU</option>
            <option value="gpu">Card đồ họa</option>
            <option value="ram">RAM</option>
            <option value="mainboard">Mainboard</option>
          </select>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Sản phẩm</th>
                <th>Danh mục</th>
                <th>Giá</th>
                <th>Tồn kho</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="7" className="admin-table-empty">
                    Chưa có sản phẩm nào để hiển thị.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>#{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.status}</td>
                    <td>
                      <button type="button">Sửa</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductManagement;