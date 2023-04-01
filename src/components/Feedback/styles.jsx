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
    color: ${({ theme }) => theme.color.neutral};
    background-color: ${({ theme }) => theme.color.highlight};
    padding: 0.5rem 1rem;
    text-align: center;
    &:hover {
      opacity: 0.9;
    }
  }
`;