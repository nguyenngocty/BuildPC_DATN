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
        {/* /admin */}
        <Route index element={<AdminDashboard />} />
 
        {/* /admin/products */}
        <Route path="products" element={<ProductManagement />} />

        {/* /admin/posts */}
        <Route path="posts" element={<PostManagement />} />

        {/* /admin/posts/create */}
        <Route path="posts/create" element={<PostForm />} />

        {/* /admin/posts/edit/1 */}
        <Route path="posts/edit/:id" element={<PostForm isEdit />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;