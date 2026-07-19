import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Johnard.</h2>

      <ul className="nav-menu">

        <li><a href="#hero">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#contact">Contact</a></li>

        <li>
          <Link to="/login">
            Admin
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;