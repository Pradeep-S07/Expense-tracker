import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AddTransaction } from "./pages/AddTransaction";
import { Navbar } from "./components/Navbar";
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddTransaction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
