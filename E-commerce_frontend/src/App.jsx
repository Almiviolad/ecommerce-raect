import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router";
import { CheckOut } from "./pages/checkout/CheckOutPage";
import { OrdersPage } from "./pages/OrderPage";
import { TrackingPage } from "./pages/TrackingPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
