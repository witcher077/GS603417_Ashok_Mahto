import { Link } from "react-router";
import "./Header.css"
import Logo from "../assets/logo.svg"
import REACT from "../assets/react.svg"

const Header = () => {
 
  return (
    <nav className="HeaderNav">
        <Link to="/"><img src={Logo} alt="Logo"/></Link>
        <Link to="/profile">profile</Link>
    </nav>
  );
};

export default Header;
