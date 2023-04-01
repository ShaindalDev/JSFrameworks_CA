import { useProductsStore } from "../../hooks/useCart";
import { StyledItemsInCart } from "./styles";

export default function CartItem({ title, id, discountedPrice, price, imageUrl, count }) {
  const { addCounter, subtractCounter, clearCount } = useProductsStore(
    (state) => ({
      addCounter: state.addCounter,
      subtractCounter: state.subtractCounter,
      clearCount: state.clearCount,
    }),
    
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
            <button onClick={() => subtractCounter(id)}>
              <span className="material-symbols-rounded">Remove</span>
            </button>{" "}
            {count}
            <button onClick={() => addCounter(id)}>
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
