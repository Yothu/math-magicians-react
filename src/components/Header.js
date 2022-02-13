import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container-fluid px-sm-5 p-3 border border-2 border-dark">
      <nav className="d-flex justify-content-between">
        <h1>Math Magicians</h1>
        <div className="d-flex justify-content-center align-items-center">
          <Link className="px-3" to="/">Home</Link>
          <Link className="px-3" to="/calculator">Calculator</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
