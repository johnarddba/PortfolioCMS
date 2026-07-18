function Navbar() {
  return (
    <nav className="navbar">

      <div className="container nav-container">

        <h2 className="logo">
          Johnard<span>.</span>
        </h2>

        <ul className="nav-menu">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>

    </nav>
  );
}

export default Navbar;