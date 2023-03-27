import styled from "styled-components";

export const StyledContactCTA = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.buttonText};
  background-color: ${({ theme }) => theme.color.contactCTA};
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 1.025rem;
  border-radius: 6px;

  &:hover {
    opacity: 0.9;
  }
`;