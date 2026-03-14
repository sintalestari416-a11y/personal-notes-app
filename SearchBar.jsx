import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/archives">Archived</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;