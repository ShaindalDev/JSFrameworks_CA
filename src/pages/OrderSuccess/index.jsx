import { useEffect } from "react";
import { SuccessPageStyle } from "./styles";
import Feedback from "../../components/Feedback";
import { Link } from "react-router-dom";


export default function CheckoutSuccess() {
    useEffect(() => {
      document.title = "Johnsen eCommerce | Thank you for your order";
    }, []);
  
    return (
      <SuccessPageStyle>
        <Feedback
          title={"Thank you for your purchase"}
          message={
            "Your order is being shipped. You will receive an email with order confirmation"
            }
        />
       <Link to="/">Return to Store</Link>
      </SuccessPageStyle>
    );
  }
  