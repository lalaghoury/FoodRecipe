import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="text-black font-32">Perfect</span>
        <span className="text-primary font-32">Recipe</span>
      </div>
      <div className="nav-links">
        <Link className="text-black links-fix" to="/">
          Home
        </Link>
        <Link className="text-black links-fix" to="/recipe">
          Recipe
        </Link>
        <Link className="text-black links-fix" to="/add-recipe">
          Add Recipe
        </Link>
        <Link className="text-black links-fix" to="/blog">
          Blog
        </Link>
        <Link className="text-black links-fix" to="/about">
          About us
        </Link>
      </div>
      <div className="nav-buttons">
        <button className="btn-sec-small">Log in</button>
        <button className="btn-primary-small">Sign up</button>
      </div>
    </nav>
  );
}

export default Header;
