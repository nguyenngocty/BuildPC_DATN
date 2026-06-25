import { Route, Routes } from "react-router-dom";

import OrderSuccess from "../views/pages/OrderSuccess/OrderSuccess";
import Home from "../views/pages/Home/Home";
import Auth from "../views/pages/Auth/Auth";
import Cart from "../views/pages/Cart/Cart";
import About from "../views/pages/About/About";
import Checkout from "../views/pages/Checkout/Checkout";
import AdminRoutes from "./AdminRoutes";

function AppRoutes() {
  return (  
    <Routes>
      {/* Trang khách */}
      <Route path="/" element={<Home />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/checkout" element={<Checkout />} />

      {/* Toàn bộ trang quản trị */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* Khi nhập đường dẫn không tồn tại */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;