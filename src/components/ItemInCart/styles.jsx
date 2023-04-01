import styled from "styled-components";

export const StyledItemsInCart = styled.div`
  display: flex;
  max-width: 45rem;
  padding: 1.5rem;
  margin: 1rem 0;
  justify-content: space-between;
  border-radius: 6px;
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.dropShadow}`};

  .item-info {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  img {
    width: 7rem;
  }

  h2 {
    margin: 0;
  }

  .price {
    margin: 0.5rem 0 1rem;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem 0;
  }

  button {
    display: flex;
    cursor: pointer;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.color.neutral};

    &:hover {
      opacity: 0.7;
      color: ${({ theme }) => theme.color.lightGrey};
      background-color: ${({ theme }) => theme.color.highlight};
    }
  }
`;
