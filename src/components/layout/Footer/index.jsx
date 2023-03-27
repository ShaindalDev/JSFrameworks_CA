import { StyledFooter } from "./styles";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <StyledFooter>
      <h3>&copy; <Link to="https://www.johnsen-codes.no">Johnsen-codes.no</Link></h3>
      <ul>
        <li>
          <Link to="https://github.com/ShaindalDev">GitHub</Link>
        </li>
        <li>·</li>
        <li>
          <Link to="https://www.linkedin.com/in/robin-johnsen-04a226159/">
            LinkedIn
          </Link>
        </li>
      </ul>
    </StyledFooter>
  );
}
