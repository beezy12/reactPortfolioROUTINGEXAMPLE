import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div>
    <p>check out the stuff Ive done:</p>
    <Link to="/portfolio/1">item one</Link>
    <Link to="/portfolio/2">item two</Link>
    <Link to="/portfolio/3">item three</Link>
  </div>
);

export default Portfolio;