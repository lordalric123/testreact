import React from "react";
import "bootstrap";
import "../body.css";

interface NavbarProps {
  NavImage: string;
  Brand: string;
}

const Navbar: React.FC<NavbarProps> = ({ NavImage, Brand }) => {
  return (
    <div className="Body">
      <nav className="navbar navbar-expand-lg custom-nav">
        <div className="container" style={{ minWidth: "95%", padding: "0px" }}>
          <a
            className="navbar-brand"
            href="#"
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              marginTop: "-10px",
              marginBottom: "-10px",
              marginLeft: "-25px",
            }}
          >
            <img
              src={NavImage}
              alt="logo "
              className="rounded-circle"
              style={{ width: "70px", height: "70px" }}
            />
            {Brand}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link custom active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDarkDropdown"
                  aria-controls="navbarNavDarkDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <button
                        className="btn dropdown-toggle custom-btn"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        About
                      </button>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link custom" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
