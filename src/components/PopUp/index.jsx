import { PopUpStyle } from "./style";
import PrimaryButton from "../PrimaryButton";
import SecondButton from "../SecondButton";
import { useLocation } from "react-router-dom";
import { usePopUpStore } from "../../hooks/popUpStore";
import { useProductsStore } from "../../hooks/useCart";
import { shallow } from "zustand/shallow";

export default function PopDialog({ text }) {
    const { pathname } = useLocation();
  
    const { isVisible, productId, hide } = usePopUpStore(
      (state) => ({
        isVisible: state.isVisible,
        productId: state.productId,
        hide: state.hide,
      }),
      shallow
    );
  
    const { clearCount } = useProductsStore((state) => ({
      clearCount: state.clearCount,
    }));
  
    function removeCartItem(productId) {
      clearCount(productId);
      hide();
    }
  
    return (
      <PopUpStyle isVisible={isVisible}>
        <div className="modal-box">
          <div className="close-button-container">
            <button onClick={() => hide()}>
              <span className="material-symbols-rounded">close</span>
            </button>
          </div>
          <h3>{text}</h3>
          {pathname === "/cart" && (
            <div className="buttons-container">
              <SecondButton
                text={"Yes"}
                onClick={() => removeCartItem(productId)}
              />
              <PrimaryButton text={"No"} onClick={() => hide()} />
            </div>
          )}
        </div>
      </PopUpStyle>
    );
  }