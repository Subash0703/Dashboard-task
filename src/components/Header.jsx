import React from "react";
import { FaBell, FaEnvelope, FaUserCircle, FaSearch } from "react-icons/fa";
import img from "../assets/img1.jpg";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-custom text-white">
      <div className="input-container w-25">
        <input
          type="text"
          className="form-control bg-dark ps-5"
          placeholder="Search..."
          aria-label="Search"
        />
        <FaSearch className="search-icon bg-custom" />
      </div>
      <div className="bg-dark d-flex align-items-center">
        <FaEnvelope className="me-3 bg-custom" />
        <FaBell className="me-3 bg-custom" />
        <FaUserCircle className="me-3 bg-custom" />
        <img
          src={img}
          alt=""
          className="rounded-circle img-fluid me-2"
          style={{ width: 20, height: 20 }}
        />
      </div>
    </header>
  );
};

export default Header;
