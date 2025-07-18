import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">💰 TrackWise</Link>
        <div className="navbar-links">
          <Link to="/">Dashboard</Link>
          <Link to="/add">Add Transaction</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};