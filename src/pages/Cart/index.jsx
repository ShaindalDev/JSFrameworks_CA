import React from "react";
import { useProductsStore } from "../../hooks/useCart";
import { shallow } from "zustand/shallow";
import CartItem from "../../components/ItemInCart";
import Feedback from "../../components/Feedback";
import CheckoutSum from "../../components/CheckoutSum";
import { StyleCartPage } from "./styles";

export default function Cart() {
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