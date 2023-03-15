import styled from "styled-components";

export const StyledNavBar = styled.nav`
  border-top: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  grid-column: -1/1;
  font-size: 1.1rem;
  

  ul {
    display: flex;
    margin-top: 1rem;
  }

  li {
    list-style-type: none;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.color.highlight};
      cursor: pointer;

      a {
        color: ${({ theme }) => theme.color.buttonText};
      }
    }

    a {
      display: block;
      padding: 0.5rem 1.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme.color.highlight};
    }
  }

  .active {
    background-color: ${({ theme }) => theme.color.buttonBackground};
    color: ${({ theme }) => theme.color.buttonText};
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
    ul {
      flex-direction: column;
    }
  }
`;
