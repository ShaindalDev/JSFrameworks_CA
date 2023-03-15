import { StyledProductCard } from "./styles";
import PrimaryButton from "../PrimaryButton";
import { Link, useLocation, useParams } from "react-router-dom";

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

  return (
    <StyledProductCard location={pathname}>
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
          <PrimaryButton text={"Add to cart"} />
        ) : (
          <Link to={`/src/pages/Product/${id}`}>View product</Link>
        )}
      </div>
    </StyledProductCard>
  );
}
