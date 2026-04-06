import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  const isHome =
    pathname === '/leolien' ||
    pathname === '/leolien/';

  return (
    <nav
      className={[
        "navbar",
        "navbar-expand-lg",
        "navbar-light",
        "navbar-hover",
        isHome ? "navbar-always-visible" : null,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/leolien' href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/leolien/projects' href="#">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/leolien/contact' href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;