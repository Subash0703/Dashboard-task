import React from "react";
import logo from "../assets/logo.png";
import {
  FaHome,
  FaList,
  FaChartBar,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="text-white h-auto d-flex flex-column p-3 bg-custom">
      <img
        src={logo}
        alt=""
        className="rounded-circle img-fluid mb-2 ms-2"
        style={{ width: 30, height: 30 }}
      />
      <ul className="nav flex-column flex-grow-1 bg-custom">
        <li className="nav-item mb-3">
          <a className="nav-link text-white" href="#">
            <FaHome />
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white" href="#">
            <FaList />
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white" href="#">
            <FaChartBar />
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white" href="#">
            <FaWallet />
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-white" href="#">
            <BsFillBagCheckFill />
          </a>
        </li>
      </ul>
      <ul className="bg-custom nav flex-column">
        <li className="nav-item mb-3">
          <a className="nav-link text-white" href="#">
            <FaSignOutAlt />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
