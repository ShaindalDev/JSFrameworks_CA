import styled from "styled-components";

export const ProductReviewStyled = styled.div`
  max-width: 25rem;
  margin-top: 1.5rem;
  border-top: ${({ theme }) =>
  `${theme.border.thickness} ${theme.border.type} ${theme.color.dropShadow}`};

  h3 {
    margin: 0.9rem;

  }

  .reviewsContainer {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    margin: 1.5rem;
    
    h4 {
      margin-right: 1rem;
      margin-bottom: 0.5rem;
    }

    p {
      margin-top: 0;
      
      flex: 100%;
    }
  }
  .rating-container {
    display: flex;
    align-items: baseline;
    border-bottom: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.dropShadow}`};
  }

  @media (max-width: ${({ theme }) => theme.break.small}) {
    h3,
    .reviews-container h4 {
      margin-right: 0;
    }

    .material-symbols-rounded {
      font-weight: lighter;
    }
  }
`
export const RatingIcon = styled.img`
width: 1.5rem;
margin-bottom: -4px;`
;
