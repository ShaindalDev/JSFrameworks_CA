import { PopUpStyle } from "./style";
import { usePopUpStore } from "../../hooks/popUpStore";

export default function PopUp({ message }) {
  const { isVisible, close } = usePopUpStore(
    (state) => ({
      isVisible: state.isVisible,
      close: state.close,
    }),
   
  );

  return (
    <PopUpStyle isVisible={isVisible}>
      <div className="modal-box">
        <div className="closeButton">
          <button onClick={() => close()}>
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
        <h3>{message}</h3>
      </div>
    </PopUpStyle>
  );
}
