import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./header.css";
import {FiDownload} from 'react-icons/fi'

const Header = () => {
  return (
    <header className="nav-header">
      <h1 className="header_title">Mano Ranjith U.</h1>
      <Navbar />
      <a className="cv-link">Download CV <FiDownload size="24px"/></a>
    </header>
  );
};

export default Header;
