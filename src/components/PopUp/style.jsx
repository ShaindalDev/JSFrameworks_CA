import styled from 'styled-components';

export const PopUpStyle = styled.div`
display: ${(props) => (props.isVisible ? "block" : "none")};
  width: 100%;
  height: 100vh;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;


  .modal-box {
    position: absolute;
    width: 500px;
    height: 8rem;
    border-radius: 12px;
    margin-top: 1.5rem;
    padding: 1rem;
    top: 5%;
    left: 50%;
    transform: translate( -50%, -50%);
    background-color: ${({ theme }) => theme.color.productCardBg};
    
  }
  .closeButton {
    text-align: right;
    button {
      padding: 0.2rem;
      cursor: pointer;
      border: none;
      background-color: ${({ theme }) => theme.color.neutral};
      color: ${({ theme }) => theme.color.dropShadow};
      border-radius: 6px;
      &:hover {
        opacity: 0.9;
        background-color: ${({ theme }) => theme.color.dropShadow};
        color: ${({ theme }) => theme.color.neutral};
      }
    }
  }

  }
  @media (max-width: ${({ theme }) => theme.break.small}) {
    .modal-box {
      width: 100%;
      margin-top: 2rem;
      height: 10rem;
    }
  }`;