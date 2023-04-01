import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useProductsStore } from "./hooks/useCart";
import { shallow } from "zustand/shallow";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Cosmetics from "./pages/Cosmetics";
import Perfumes from "./pages/Perfumes";
import Fashion from "./pages/Fashion";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SearchResults from "./pages/SearchResults";
import Cart from "./pages/Cart";
import OrderSuccessFull from "./pages/OrderSuccess";
import Feedback from "./components/Feedback";
import Loader from "./components/Loader";



function App() {
  const { availableProducts, fetchProducts, isLoading, error } =
    useProductsStore(
      (state) => ({
        availableProducts: state.availableProducts,
        fetchProducts: state.fetchProducts,
        isLoading: state.isLoading,
        error: state.error,
      }),
      shallow
    );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading || !availableProducts) {
    return <Loader />;
  }

  if (error) {
    return <Feedback title={"An error occurred"} message={error} />;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="cosmetics" element={<Cosmetics />} />
        <Route path="perfumes" element={<Perfumes />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="searchResults" element={<SearchResults />} />
        <Route path="success" element={<OrderSuccessFull />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
