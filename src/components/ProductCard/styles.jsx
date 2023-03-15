import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  width: 30rem;
  padding: 1rem;
  border-radius: 15px;
  background-color: ${({ theme }) =>
    `${theme.color.productCardBg}`};

  img {
    max-width: 100%;
    align-self: center;
    border-radius: 15px;
    
  }

  .items-data {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }

  .promotion-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .promotion-container-hidden {
    display: none;
  }

  .original-price {
    text-decoration: line-through;
  }

  .discount {
    background-color: red;
    color: ${({ theme }) => theme.color.neutral};
    padding: 0.3rem;
    border-radius: 4px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.buttonText};
    background-color: ${({ theme }) => theme.color.buttonBackground};
    padding: 0.9rem;
    max-width: 350px;
    text-align: center;
    align-self: center;
    border-radius: 6px;
    &:hover {
      opacity: 0.9;
    }
  }

  
  ${({ location }) =>
    location.includes("/src/pages/Product") &&
    `
    flex-direction: row-reverse;
    width: 80%;
    gap: 1rem;

     img,
     .product-data {
     max-width: 50%;
     }
  `}

  //reset flex-direction and img size on small screens
  @media (max-width: ${({ theme }) => theme.break.small}) {
    flex-direction: column;

    img,
    .product-data {
      max-width: 100%;
    }
  }
`;