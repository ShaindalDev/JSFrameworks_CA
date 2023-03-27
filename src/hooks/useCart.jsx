// import { create } from 'zustand'

// const useCartStore = create((set) => ({
//     products: [],
//     addToCart: () => set((state) => ({ products: [...state.products, 'Products']})),
//     clearCart: () => set({ Products: [] }),
//     addAllProducts: (productsList) => set({ products: productsList})
// }))

// function useCart() {
//     const addToCart = useCartStore((state) => state.addToCart);
//     function addToCart(id) {
//         console.log('Add to cart');
//     }

//     function clearCart() {
//         console.log('Clear cart');
//     }

//     function setProduct() {
//         //
//     }
//     return { addToCart, clearCart, setProduct };
// }

// export { useCart };

import { create } from "zustand";
import { API_URL } from "../utils/constants";
import { persist, createJSONStorage } from "zustand/middleware";

export const useProductsStore = create(
  persist(
    (set) => ({
      availableProducts: [],
      isLoading: false,
      error: null,
      fetchProducts: async () => {
        try {
          set({ isLoading: true });
          const response = await fetch(API_URL);
          const products = await response.json();

          // Get stored products from localStorage
          let storedProducts = JSON.parse(localStorage.getItem("cart")) || [];
          storedProducts = storedProducts.state.availableProducts;

          // Merge stored products with products from API response
          const mergedProducts = products.map((item) => {
            const storedItem = storedProducts.find(
              (storedItem) => storedItem.id === item.id
            );
            const count = storedItem ? storedItem.count : 0;
            return { ...item, count };
          });

          // Set availableProducts state
          set({
            availableProducts: mergedProducts,
          });
        } catch (error) {
          set({ error: error.message });
        } finally {
          set({ isLoading: false });
        }
      },
      addOne: (productId) =>
        set((state) => ({
          availableProducts: state.availableProducts.map((item) =>
            item.id === productId ? { ...item, count: item.count + 1 } : item
          ),
        })),
      subtractOne: (productId) =>
        set((state) => ({
          availableProducts: state.availableProducts.map((item) =>
            item.id === productId
              ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
              : item
          ),
        })),
      clearCount: (productId) =>
        set((state) => ({
          availableProducts: state.availableProducts.map((item) =>
            item.id === productId ? { ...item, count: 0 } : item
          ),
        })),
      clearCart: () =>
        set((state) => ({
          availableProducts: state.availableProducts.map((item) => ({
            ...item,
            count: 0,
          })),
        })),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
      // Only persist items with count > 0
      partialize: (state) => ({
        availableProducts: state.availableProducts.filter(
          (item) => item.count > 0
        ),
      }),
    }
  )
);