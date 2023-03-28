import { StyledProdCard } from "./styles";
import { Link, useLocation, useParams } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import PopDialog from "../PopUp";
import { useProductsStore } from "../../hooks/useCart";
import { usePopUpStore } from "../../hooks/popUpStore";
import { shallow } from "zustand/shallow";

export default function ProductCard({
  id,
  description,
  discountedPrice,
  imageUrl,
  price,
  title,
}) {
  
  const { pathname } = useLocation();
  const { id: productId } = useParams();

  const { addOne } = useProductsStore(
    (state) => ({
      addOne: state.addOne,
    }),
    shallow
  );

  //PopUp modal
  const { isVisible, show } = usePopUpStore(
    (state) => ({
      isVisible: state.isVisible,
      show: state.show,
    }),
    shallow
  );

  function handleClick(productId) {
    addOne(productId);
    show();
  }

  return (
    <StyledProdCard location={pathname}>
      <PopDialog
        text={"Your item has been added to the cart"}
        isVisible={isVisible}
      />
      <img src={imageUrl} alt={description} />
      <div className="items-data">
        <h2>{title}</h2>
        {pathname === `/src/pages/Product/${productId}` && <p>{description}</p>}
        <div
          className={
            price !== discountedPrice
              ? "promotion-container"
              : "promotion-container-hidden"
          }
        >
          <p className="original-price">{price !== discountedPrice ? price : ""}</p>
          <p className="discount">
            {price !== discountedPrice &&
              Math.trunc(((price - discountedPrice) / discountedPrice) * 100)}
            {price !== discountedPrice && "% OFF"}
          </p>
        </div>
        <p>{discountedPrice} USD</p>
        {pathname === `/src/pages/Product/${productId}` ? (
          <PrimaryButton onClick={() => handleClick(productId)} text={"Add to cart"} />
        ) : (
          <Link to={`/src/pages/Product/${id}`}>View product</Link>
        )}
      </div>
    </StyledProdCard>
  );
}
