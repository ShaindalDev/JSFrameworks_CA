import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StyledNavBar } from "./styles";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  let location = useLocation();
  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  function toggleMenu() {
    setIsVisible((prevState) => {
      return !prevState;
    });
  }

  return (
    <>
      <button className="menu" onClick={toggleMenu}>
        <span className="material-symbols-rounded">menu</span>
      </button>
      <StyledNavBar isVisible={isVisible}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/Electronics">Electronics</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/Cosmetics">Cosmetics</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/Perfumes">Perfumes</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/Fashion">Fashion</NavLink>
          </li>
          <li>
            <NavLink to="/src/pages/Contact">Contact</NavLink>
          </li>
        </ul>
      </StyledNavBar>
    </>
  );
}
