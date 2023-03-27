import styled from "styled-components";

export const StyledContactForm = styled.form`
  width: 600px;
  border-radius: 12px;

  fieldset {
    border-radius: 15px;
    margin-bottom: 1.5rem;
    border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.dropShadow}`};
  }

  legend {
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 12px;
    border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.neutral}`};
  }

  input {
    height: 2.2rem;
  }

  textarea {
    height: 7rem;
  }

  .error-message {
    font-size: 0.85rem;
    margin: 0 0 1.5rem;
    color: red;
  }

  .button-container {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1rem;
    button {
      width: 100%;
    }
  }
`;
