import { Routes, Route } from "react-router-dom";

import Home from "../views/pages/Home/Home";
import Checkout from "../views/pages/Checkout/Checkout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default AppRoutes;