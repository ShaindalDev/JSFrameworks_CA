import { Link } from "react-router-dom";
import myLogo from "../../../assets/logo.svg";

export default function Logo() {
  return (
    <Link to="/">
      <img src={myLogo} alt="Johnsen eCommerce logo" />
    </Link>
  );
}
