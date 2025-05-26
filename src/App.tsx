import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Layout from "./components/Layout";
import PricingPage from "./pages/PricingPage";
import NewsPage from "./pages/NewsPage";
import ProductPage from "./pages/ProductPage";

export const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
);
