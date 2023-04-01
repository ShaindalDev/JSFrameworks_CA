import { Link } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { useProductsStore } from "../../../hooks/useCart";

export default function Cart() {
  const { availableProducts } = useProductsStore(
    (state) => ({
      availableProducts: state.availableProducts,
    }),
    shallow
  );

  const totalProducts = [];

  availableProducts.forEach((element) => {
    totalProducts.push(element.count);
  });

  function showTotal() {
    return totalProducts.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
    );
  }
  return (
    <div className="cart-container">
      <Link to="/cart" className="cart-wrapper">
        <span className="material-symbols-rounded">shopping_cart</span>
        <span>{showTotal()}</span>
      </Link>
    </div>
  );
}
