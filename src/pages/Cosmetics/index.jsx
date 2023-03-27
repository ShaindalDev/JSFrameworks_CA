import React, { useState, useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";
import { API_URL } from "../../utils/constants";

export default function Cosmetics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Johnsen eCommerce | Cosmetics";

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
  const Cosmetics = products.filter((product) => {
    return (
      product.tags.includes("beauty") ||
      product.tags.includes("shampoo")
      
    );
  });

  return (
    <StyledPage>
      <h1 align='center'>Cosmetics</h1>
      {Cosmetics.map((item) => {
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
