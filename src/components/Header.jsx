import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => {
  return (
    <header className="header bg-primary text-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="text-white text-decoration-none">
          <h1 className="m-0">FINAL OMDB Movie Search</h1>
        </Link>
        {/* <nav className="nav">
          <Link to="/" className="nav-link text-white">Home</Link>
          <Link to="/about" className="nav-link text-white">About</Link>
          <Link to="/contact" className="nav-link text-white">Contact</Link>
        </nav> */}
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
