import "./App.css";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import UsersApp from "./components/UsersApp/UsersApp";
import CompaniesApp from "./components/CompaniesApp/CompaniesApp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/users/*" element={<UsersApp />} />
        <Route path="/companies/*" element={<CompaniesApp />} />
      </Routes>
    </div>
  );
}

export default App;
