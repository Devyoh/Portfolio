import React from "react";

import Logo from "./../../assets/Logo/LOGO.png";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="header_navbar flex flex-row bg-gray-800 text-gray-100 justify-around p-4 ">
      <Link className=" flex flex-column  hover:text-teal-600 " to="/">
        <img className="" src={Logo} alt="Logo" />
      </Link>
      <Link className=" hover:text-teal-600" to="/tuto">
        <h3 className="">Tutoriels</h3>
      </Link>
      <Link className=" hover:text-teal-600 " to="/contact">
        <h3 className="">Contact</h3>
      </Link>
      <Link className=" hover:text-teal-600" to="/about">
        <h3 className="">À propos</h3>
      </Link>
      <Link className=" hover:text-teal-600" to="/connexion">
        <h3 className="">Mon Compte</h3>
      </Link>
    </nav>
  );
}
