import { Routes, Route } from "react-router-dom";

import AdminRoutes from "./AdminRoutes";
import Checkout from "../views/pages/Checkout/Checkout";
import Home from "../views/pages/Home/Home";
import Auth from "../views/pages/Auth/Auth";
import Cart from "../views/pages/Cart/Cart";
import AdminRoutes from "./AdminRoutes";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
}

export default AppRoutes;