import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Habit Tracking Application</h1>
    <nav>
      <Link to="/">Tracker</Link>
    </nav>
  </header>
);

export default Header;
