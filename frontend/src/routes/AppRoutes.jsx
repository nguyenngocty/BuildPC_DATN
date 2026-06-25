import { Route, Routes } from "react-router-dom";

import Home from "../views/pages/Home/Home";
import Auth from "../views/pages/Auth/Auth";
import Cart from "../views/pages/Cart/Cart";
import Checkout from "../views/pages/Checkout/Checkout";
import AdminRoutes from "./AdminRoutes";

function AppRoutes() {
  return (
    <Routes>
      {/* Trang khách */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      {/* Toàn bộ trang quản trị */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Khi nhập đường dẫn không tồn tại */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;