import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="d-flex justify-content-between">
        <h1>Math Magicians</h1>
        <div className="d-flex justify-content-center">
          <Link to="/calculator">Calculator</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
