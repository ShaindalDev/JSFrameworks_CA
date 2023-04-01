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
    top: 5%;
    left: 50%;
    transform: translate( -50%, -50%);
    border-radius: 12px;
    background-color: ${({ theme }) => theme.color.productCardBg};
    padding: 1rem;
    
  }
  .closeButton {
    text-align: right;
    button {
      padding: 0.2rem;
      border: none;
      background-color: ${({ theme }) => theme.color.neutral};
      color: ${({ theme }) => theme.color.dropShadow};
      border-radius: 6px;
      cursor: pointer;
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
      height: 11rem;
    }
  }`;