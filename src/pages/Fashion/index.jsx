import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { API_URL } from "../../utils/constants";
import { StyledPage } from "../pageStyles";

export default function Fashion() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Johnsen eCommerce | Fashion";

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
  const fashion = products.filter((product) => {
    return (
      product.tags.includes("fashion") ||
      product.tags.includes("shoes") ||
      product.tags.includes("bags") ||
      product.tags.includes("glasses")
    );
  });

  return (
    <StyledPage>
      <h1 align='center'>Fashion</h1>
      {fashion.map((item) => {
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
