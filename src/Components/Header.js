import React from 'react';
import { FaUser } from 'react-icons/fa';
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
        <FaUser className="primary-color" />
      </button>
    </nav>
  </header>
);

export default Header;
