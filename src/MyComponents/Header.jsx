import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import menuIcon from '../images/toggleMenu.svg';
import { useState } from "react";

export default function Header(props) {

  const[isMenuOpen,setIsMenuOpen] = useState(false);
  const handleToggleClick = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    
    <nav className={`navbar navbar-expand-lg sticky-top bg-dark text-white ${isMenuOpen ? "expanded" : ""}`}>
      <div className="container-fluid d-flex flex-column align-items-center">
          <Link className="navbar-brand text-white" to="/">
            <span className="heading"> MyTodoList </span> 
          </Link>
          <button className="menu-toggler" onClick={handleToggleClick}>
            <img src={menuIcon} alt="Menu" width="30" height="30" />
          </button>

        <div className={`menu-links${isMenuOpen ? "show-menu":""}`}
         onClick={()=>setIsMenuOpen(false)}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/About">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  
};
