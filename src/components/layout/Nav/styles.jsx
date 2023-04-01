import styled from "styled-components";

export const StyledNavBar = styled.nav`
  border-top: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.lightGrey}`};
  grid-column: -1/1;
  font-size: 1.1rem;
  

  ul {
    display: flex;
    margin-top: 1.2rem;
  }

  li {
    list-style-type: none;
    text-transform: uppercase;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => theme.color.gradientHover};
      cursor: pointer;
      border-radius: 4px;

      a {
        color: ${({ theme }) => theme.color.buttonText};
      }
    }

    a {
      display: block;
      padding: 0.5rem 1.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme.color.neutral};
    }
  }

  .active {
    background: linear-gradient(to right, rgba(106,17,203,0.5), rgba(37,117,252,0.5));
    color: ${({ theme }) => theme.color.buttonText};
    border-radius: 4px;
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
    ul {
      flex-direction: column;
    }
  }
`;
