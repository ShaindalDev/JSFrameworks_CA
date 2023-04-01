import { useState } from "react";

const usePopup = () => {
    const [popup, setPopup] = useState([]);

    const showPopup = (message) => {
        const popupId = new Date().getTime();

        setPopup((prevPopup) => [...prevPopup, { id: popupId, message }]);

        setTimeout(() => {
            setPopup((prevPopup) => prevPopup.filter((popup) => popup.id !== popupId));
        }, 3000);
    };
    
    return { popup, showPopup };
};

export default usePopup;