import React, { useEffect } from "react";
import { useProductsStore } from "../../hooks/useCart";
import { shallow } from "zustand/shallow";
import { StyleCartPage } from "./styles";
import CartItem from "../../components/ItemInCart";
import PopDialog from "../../components/PopUp";
import Feedback from "../../components/Feedback";
import CheckoutSum from "../../components/CheckoutSum";

export default function Cart() {
  useEffect(() => {
    document.title = "Johnsen eCommerce | Shopping Cart";
  }, []);

  const { availableProducts, clearCart } = useProductsStore(
    (state) => ({
      availableProducts: state.availableProducts,
      clearCart: state.clearCart,
    }),
    shallow
  );

  const cartItems = availableProducts.filter((items) => {
    return items.count > 0;
  });

  let subTotal = [];

  cartItems.forEach((items) => {
    subTotal.push(items.count * items.discountedPrice);
  });

  function calcSubTotal() {
    const sum = subTotal.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum.toFixed(2);
  }

  function calcVAT() {
    const sum = calcSubTotal();
    return ((sum *25) / 100).toFixed(2);
  }

  function calcTotal() {
    const vat = parseFloat(calcVAT());
    const subTotal = parseFloat(calcSubTotal());
    return (vat + subTotal).toFixed(2);
  }

  return (
    <StyleCartPage>
      <PopDialog text={"Are you sure you want to remove this item?"} />
      {cartItems.length > 0 ? (
        <>
      <h1>Shopping cart</h1>
          <div className="purchase">
            {cartItems.map((items) => (
              <CartItem
                key={items.id}
                id={items.id}
                title={items.title}
                count={items.count}
                discountedPrice={items.discountedPrice}
                imageUrl={items.imageUrl}
              />
            ))}
          </div>
          <CheckoutSum
            calcSubtotal={calcSubTotal}
            calcVAT={calcVAT}
            calcTotal={calcTotal}
            clearCart={clearCart}
          />
        </>
      ) : (
        <div>
          <Feedback title={'You have not started Shopping yet.'} />
        </div>
      )}
    </StyleCartPage>
  )
}

/*
TO DO:
Fix clear cart when place order is clicked
change background color of summary and list of items in the cart so that it's not same color as body
check to see if box-shadow can be nice to have 
fix color on +/- and trashcan button, it's to dark*/
