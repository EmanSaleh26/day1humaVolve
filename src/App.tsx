import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsPage } from "./Pages/ProductsPage";
import { ProductDetailsPage } from "./Pages/ProductDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" replace />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
    </Routes>
  );
}
