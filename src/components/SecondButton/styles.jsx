import styled from "styled-components";
import { StyledPrimaryButton } from "../PrimaryButton/styles";

export const SecondButtonStyle = styled(StyledPrimaryButton)`
text-transform: uppercase;
  color: ${({ theme }) => theme.color.buttonText};
  background-color: ${({ theme }) => theme.color.secondButtonBG};
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-top: 1rem;
  text-align: center;
  font-size: 1.025rem;
  border-radius: 6px;

  &:hover {
    opacity: 0.9;
  }
  }`;