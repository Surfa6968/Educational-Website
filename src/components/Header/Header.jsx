import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./header.css";
import logo from "../../assets/images/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "ICT Department", href: "/department-ict" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="seu-header">
      <div className="seu-header-inner">
        <div className="seu-header-main">
          {/* Logo */}
          <div className="seu-logo-wrap">
            <Link to="/" className="seu-logo-link">
              <img src={logo} alt="SEUSL ICT Logo" className="seu-logo-img" />
              <span className="seu-logo-text">ixa LMS</span>
            </Link>
          </div>

          {/* Right side: nav + sign in */}
          <div className="seu-right-wrap">
            <nav className="seu-nav-desktop">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    "seu-nav-link " + (isActive(item.href) ? "seu-nav-link-active" : "")
                  }
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="seu-nav-right">
              <button
                className="btn-sign_in"
                onClick={() => navigate("/login")}
              >
                SIGN IN
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="seu-menu-toggle">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="seu-menu-button"
              >
                {isMenuOpen ? (
                  <X className="seu-menu-icon" />
                ) : (
                  <Menu className="seu-menu-icon" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="seu-nav-mobile">
            <div className="seu-nav-mobile-panel">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={
                    "seu-nav-mobile-link " +
                    (isActive(item.href)
                      ? "seu-nav-mobile-active"
                      : "")
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="btn-sign_in-mobile"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate("/login");
                }}
              >
                SIGN IN 
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
