import styled from "styled-components";

export const StyledCheckoutSum = styled.div`
border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem 0;
  height: fit-content;
  flex: 0 0 30%;
  border-radius: 6px;
  h3 {
    margin: 0 0 1rem;
  }
  .price-sum {
    display: flex;
    justify-content: space-between;
    p {
      margin: 0.5rem 0;
    }
    .total {
      font-weight: 700;
      margin: 1rem 0;
    }
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.neutral};
    background-color: ${({ theme }) => theme.color.primaryCTA};
    padding: 0.5rem 0;
    border-radius: 6px;
    text-align: center;
    &:hover {
      opacity: 0.9;
    }
  }
  @media (max-width: ${({ theme }) => theme.break.medium}) {
    flex: 0 0 100%;
  }`;