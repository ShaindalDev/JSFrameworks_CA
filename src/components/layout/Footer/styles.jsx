import styled from "styled-components";

export const StyledFooter = styled.footer`
background: ${({ theme }) => theme.color.headerGradient};
  border-top: ${({ theme }) =>
    `${theme.border.thicknessDivider} ${theme.border.type} ${theme.color.dividerColorLeft}`};
  text-align: center;
  padding-bottom: 3rem;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    gap: 1rem;
  }

  a {
    color: ${({ theme }) => theme.color.neutral};
  }
`;
