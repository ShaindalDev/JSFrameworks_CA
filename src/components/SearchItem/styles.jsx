import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchItemImg = styled.img`
  margin-left: 1rem;
  display: none;
  width: 60px;
  height: 40px;
  object-fit: cover;
  @media (min-width: 700px) {
    display: block;
  }
`;

export const SearchItemLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-top: 0.75rem;
  :hover {
    background-color: ${({ theme }) => theme.color.lightHover};
  }
`;

export const SearchItemTitle = styled.span`
  font-weight: 600;
  margin: 0 1rem;
  flex-grow: 2;
  @media (min-width: 700px) {
    font-size: 1.125rem;
  }
`;

export const SearchItemPrice = styled.span`
  display: none;
  font-weight: 600;
  margin-right: 1rem;
  @media (min-width: 500px) {
    display: block;
    width: 145px;
  }
  @media (min-width: 700px) {
    font-size: 1.125rem;
  }
  `;