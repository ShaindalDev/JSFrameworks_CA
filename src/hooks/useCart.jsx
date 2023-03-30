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

         
          let storedProducts = JSON.parse(localStorage.getItem("cart")) || [];
          storedProducts = storedProducts.state.availableProducts;

          
          const mergedProducts = products.map((item) => {
            const storedItem = storedProducts.find(
              (storedItem) => storedItem.id === item.id
            );
            const count = storedItem ? storedItem.count : 0;
            return { ...item, count };
          });

          
          set({
            availableProducts: mergedProducts,
          });
        } catch (error) {
          set({ error: error.message });
        } finally {
          set({ isLoading: false });
        }
      },
      addCounter: (productId) =>
        set((state) => ({
          availableProducts: state.availableProducts.map((item) =>
            item.id === productId ? { ...item, count: item.count + 1 } : item
          ),
        })),
      subtractCounter: (productId) =>
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