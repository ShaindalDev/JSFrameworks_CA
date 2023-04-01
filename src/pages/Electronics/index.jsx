import React, { useState, useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";
import { API_URL } from "../../utils/constants";

export default function Electronics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Johnsen eCommerce | Electronics";

    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  //filter items by tag
  const electronics = products.filter((product) => {
    return (
      product.tags.includes("electronics") ||
      product.tags.includes("headphones") ||
      product.tags.includes("watch")
    );
  });

  return (
    <StyledPage>
      <h1 align='center'>Electronics</h1>
      {electronics.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            discountedPrice={item.discountedPrice}
            description={item.description}
          />
        );
      })}
    </StyledPage>
  );
}
