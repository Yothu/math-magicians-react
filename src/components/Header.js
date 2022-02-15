import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container-fluid px-sm-5 p-3 border border-2 border-dark bg-sea-blue border-light-blue">
      <nav className="d-flex justify-content-between">
        <h1 className="text-white m-0">Math Magicians</h1>
        <div className="d-flex justify-content-center align-items-center">
          <Link className="route-text px-2 py-1 text-decoration-none text-white" to="/">Home</Link>
          <Link className="route-text px-2 py-1 text-decoration-none text-white" to="/calculator">Calculator</Link>
          <Link className="route-text px-2 py-1 text-decoration-none text-white" to="/quote">Quote</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
