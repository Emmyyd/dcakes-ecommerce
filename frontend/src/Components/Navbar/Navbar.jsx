import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems, user, logout } = useContext(ShopContext);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* LOGO */}
      <Link to="/" className="nav-logo">🍰 DCAKES</Link>

      {/* MENU */}
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}
            onClick={() => setMenuOpen(false)}>Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cakes" className={({ isActive }) => isActive ? "active" : ""}
            onClick={() => setMenuOpen(false)}>Cakes</NavLink>
        </li>
        <li>
          <NavLink to="/designs" className={({ isActive }) => isActive ? "active" : ""}
            onClick={() => setMenuOpen(false)}>Designs</NavLink>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">

        {user ? (
          <div className="nav-user" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="nav-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="nav-username">Hi, {user.name.split(' ')[0]}</span>

            {dropdownOpen && (
              <div className="nav-dropdown">
                <div className="dropdown-info">
                  <p className="dropdown-name">{user.name}</p>
                  <p className="dropdown-email">{user.email}</p>
                </div>
                <hr />
                <button className="dropdown-logout" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}

        <Link to="/cart" className="cart-icon">
          🛒
          {getTotalCartItems() > 0 && (
            <span className="cart-count">{getTotalCartItems()}</span>
          )}
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

    </div>
  );
};

export default Navbar;