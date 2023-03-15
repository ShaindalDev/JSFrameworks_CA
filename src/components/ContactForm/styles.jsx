import styled from "styled-components";

export const StyledContactForm = styled.form`
  width: 600px;
  border-radius: 12px;

  fieldset {
    border-radius: 15px;
    margin-bottom: 1rem;
  }

  legend {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  }

  input {
    height: 2rem;
  }

  textarea {
    height: 6rem;
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
