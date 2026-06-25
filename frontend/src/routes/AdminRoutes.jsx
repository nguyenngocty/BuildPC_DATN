import { Route, Routes } from "react-router-dom";

import AdminLayout from "../views/Admin/layouts/AdminLayout";
import AdminDashboard from "../views/Admin/pages/Dashboard/AdminDashboard";
import ProductManagement from "../views/Admin/pages/Products/ProductManagement";
import PostManagement from "../views/Admin/pages/Post/PostManagement";
import PostForm from "../views/Admin/pages/Post/PostForm";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />

        <Route path="products" element={<ProductManagement />} />

        <Route path="posts" element={<PostManagement />} />
        <Route path="posts/create" element={<PostForm />} />
        <Route path="posts/edit/:id" element={<PostForm isEdit />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;