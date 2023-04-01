import { FeedbackStyle } from "./styles";
import { useLocation, Link } from "react-router-dom";

export default function Feedback({ title, message }) {
  const { pathname } = useLocation();

  return (
    <FeedbackStyle>
      <h1>{title}</h1>
      <p>{message}</p>
      {(pathname === "/checkoutSuccess" ||
        pathname === "/cart") && <Link to={"/"}>Go shopping</Link>}
    </FeedbackStyle>
  );
}