import { ProductReviewStyled } from "./styles";
import { RatingIcon } from "./styles";
import { Star } from "@styled-icons/fa-solid/Star";
import { StarEmpty } from "@styled-icons/icomoon/StarEmpty";

export default function ProductReviews({ rating, reviews }) {
  const filled = parseInt(Math.round(rating));
  const empty = 5 - filled;

  const stars = [];

  for (let i = 0; i < filled; i++) {
    stars.push(<RatingIcon src={Star} key={`filled-${i}`}/>);
  }
  for (let i=0; i < empty; i++) {
    stars.push(<RatingIcon src={StarEmpty} key={`empty-${i}`}/>);
  }

  const userReviews = reviews.map((review) => {
    return (
      <div key={review.id} className="reviewsContainer">
        <h4>{review.username}</h4>
        <span>{stars}</span>
        <p>{review.description}</p>
      </div>
    );
  });

  return (
    <ProductReviewStyled>
      <h3>Reviews</h3>
      {userReviews.length > 0 ? (
        userReviews
      ) : (
        <p className="reviewsContainer">This item has no reviews</p>
      )}
      <div className="rating-container">
        <h3>Rating</h3>
        {stars}
      </div>
  
    </ProductReviewStyled>
  );
}
