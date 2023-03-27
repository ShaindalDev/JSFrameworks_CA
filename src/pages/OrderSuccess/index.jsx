import { useEffect } from "react";
import { SuccessPageStyle } from "./styles";
import CheckoutSum from "../../components/CheckoutSum";
import Feedback from "../../components/Feedback";

export default function CheckoutSuccess() {
    useEffect(() => {
      document.title = "Johnsen eCommerce | Thank you for your order";
    }, []);
  
    return (
      <SuccessPageStyle>
        <Feedback
          title={"Thank you for your purchase"}
          message={
            "Your order is being shipped. You will receive an email with the tracking number shortly"
            }
        />
        
      </SuccessPageStyle>
    );
  }

  /*
  TO DO
  Fix clear cart when place order is clicked */
  