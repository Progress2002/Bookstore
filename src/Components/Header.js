import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <div className="logo">
            <h1>Bookstore CMS</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">BOOKS</Link>
              </li>
              <li>
                <Link to="/categories">CATEGORIES</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div></div>
      </header>
    );
  };
};

export default Header