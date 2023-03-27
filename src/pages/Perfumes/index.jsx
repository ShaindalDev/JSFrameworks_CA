import React, { useState, useEffect } from "react";
import { StyledPage } from "../pageStyles";
import ProductCard from "../../components/ProductCard";
import { API_URL } from "../../utils/constants";

export default function Perfumes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Johnsen eCommerce | Perfumes";

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
  const perfumes = products.filter((product) => {
    return (
      product.tags.includes("perfume")
    );
  });

  return (
    <StyledPage>
      <h1 align='center'>Perfumes</h1>
      {perfumes.map((item) => {
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
