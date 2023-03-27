import { useProductsStore } from "../../hooks/useCart";
import { shallow } from "zustand/shallow";
import { StyledItemsInCart } from "./styles";

export default function CartItem({ title, count, discountedPrice, price, id, imageUrl }) {
  const { addOne, subtractOne, clearCount } = useProductsStore(
    (state) => ({
      addOne: state.addOne,
      subtractOne: state.subtractOne,
      clearCount: state.clearCount,
    }),
    shallow
  );
  function calcSubTotal(discountedPrice, count) {
    return (discountedPrice * count).toFixed(2);
  }

  return (
    <StyledItemsInCart>
      <div className="item-info">
        <img src={imageUrl} alt={title} />
        <div>
          <h2>{title}</h2>
          <p className="price">{calcSubTotal(discountedPrice, count)} USD</p>
          <div className="quantity">
            QTY:{" "}
            <button onClick={() => subtractOne(id)}>
              <span className="material-symbols-rounded">Remove</span>
            </button>{" "}
            {count}
            <button onClick={() => addOne(id)}>
              <span className="material-symbols-rounded">Add</span>
            </button>
          </div>
          <p>(Price per unit: {price} USD)</p>
        </div>
      </div>
      <div>
        <button onClick={() => clearCount(id)}>
          <span className="material-symbols-rounded">Delete</span>
        </button>
      </div>
    </StyledItemsInCart>
  );
}
