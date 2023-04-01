import { create } from "zustand";

export const usePopUpStore = create((set) => ({
  isVisible: false,
  productId: null,
  show: (productId) => {
    set(() => ({ isVisible: true, productId }));
    const body = document.body;
    //user can view modal is browsing from small screens
    window.scrollTo({
      top: 0,
    });
    body.style.overflow = "hidden";
  },

  close: () => {
    set(() => ({ isVisible: false }));
    const body = document.body;
    body.style.overflow = "auto";
  },
}));