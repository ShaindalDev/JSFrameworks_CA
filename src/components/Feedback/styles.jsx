import styled from "styled-components";

export const FeedbackStyle = styled.div`
  text-align: center;
  h1 {
    text-transform: uppercase;
  }

  p {
    margin-bottom: 5rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.color.neutral};
    background-color: ${({ theme }) => theme.color.highlight};
    
    &:hover {
      opacity: 0.9;
    }
  }
`;