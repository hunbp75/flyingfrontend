import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/register">Registration</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/test">Game</Link>
      </div>
    </nav>
  );
};

export default NavBar;
