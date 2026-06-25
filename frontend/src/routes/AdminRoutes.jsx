import { Route, Routes } from "react-router-dom";

import AdminLayout from "../views/Admin/layouts/AdminLayout";
import AdminDashboard from "../views/Admin/pages/Dashboard/AdminDashboard";
import ProductManagement from "../views/Admin/pages/Products/ProductManagement";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<ProductManagement />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;