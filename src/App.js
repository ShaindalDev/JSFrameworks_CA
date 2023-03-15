import React from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/src/pages/Cart" element={<Cart />} />
        <Route index element={<Home />} />
        <Route path="/src/pages/Electronics" element={<Electronics />} />
        <Route path="/src/pages/Cosmetics" element={<Cosmetics />} />
        <Route path="/src/pages/Perfumes" element={<Perfumes />} />
        <Route path="/src/pages/Fashion" element={<Fashion />} />
        <Route path="/src/pages/Product/:id" element={<Product />} />
        <Route path="/src/pages/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/src/pages/SearchResults" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}

export default App;
