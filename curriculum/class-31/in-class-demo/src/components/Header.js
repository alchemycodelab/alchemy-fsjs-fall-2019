import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Header</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about/spot">Spot</Link>
      <Link to="/about/ryan">Ryan</Link>
    </nav>
  </header>
);

export default Header;
