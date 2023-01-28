import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">Bookstore CMS</Link>
      <ul className="nav-links">
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <button type="button" className="icon-button">
        <span className="primary-color">person</span>
      </button>
    </nav>
  </header>
);

export default Header;
