import styled from "styled-components";

export const StyledContactForm = styled.form`
  width: 600px;
  border-radius: 12px;
  fieldset {
    border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.dropShadow}`};
    border-radius: 15px;
    margin-bottom: 1.5rem;
    
  }
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

  .required-text {
    font-size: 14px;
    color: ${({ theme }) => theme.color.secondButtonBG};
    margin: 2.5rem 0;

  }
  .button-container {
    width: 50%;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    button {
      width: 100%;
    }
  }
`;
