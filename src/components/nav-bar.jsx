import './nav-bar.css';

function NavBar() {
    return (
        <nav className="navbar">
        <div className="container">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    
  );
}

export default NavBar;