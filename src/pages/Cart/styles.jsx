import styled from "styled-components";

export const StyleCartPage = styled.main`
  display: flex;
  margin: 4rem 0;
  padding: 0 1rem;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  h1 {
    flex: 100%;
    text-align: center;
  }

  .purchase {
    flex: 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    .purchase {
      flex: 0 0 100%;
    }
  }
`;
