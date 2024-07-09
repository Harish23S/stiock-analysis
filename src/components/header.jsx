import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from '../pages/homepage';
import Footer from './footer';
import Contact from '../pages/contact';
import InputLogger from '../pages/about';
import viteLogo from '/vite.svg';

const Header = () => (
  <Router>
    <nav className='menuItems'>
      <div className='Logo'>
        <img src={viteLogo}></img>
      </div>
      <div className='Navbar'>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add" element={<InputLogger />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/c" element={<Contact />} />
    </Routes>
    < Footer />
  </Router>
);

export default Header;
