import React from 'react';
import Navbar from './Navbar';

// CONNIE: this would have been the perfect place to define your router!

const Root = ({ children }) => (
  <div id="main" className="container">
    <Navbar />
  </div>
);

export default Root;
