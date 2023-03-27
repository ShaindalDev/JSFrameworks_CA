import styled from "styled-components";

export const StyledContactCTA = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.neutral};
  background: ${({ theme }) => theme.color.contactCTA};
  border: ${({ theme }) => `${theme.border.thickness} ${theme.border.type} ${theme.color.dropShadow}`};
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 1.025rem;
  border-radius: 6px;

  &:hover {
    box-shadow: 0 0 20px ${({ theme }) => theme.color.primaryCTA};
    opacity: 1;
  }
`;