import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation()
  const currentRoute = location.pathname;

  return (
    <nav className="header_navbar text-lg ">
      <ul className="flex flex-row z-10 bg-gray-800 text-gray-100 justify-around p-4 ">
        <li>
          <Link className=" flex flex-column  hover:text-teal-600 " to="/">
            <h3 className="">Accueil</h3>
          </Link>
        </li>
        <li>
          <Link className=" hover:text-teal-600" to="/tuto">
            <h3 className="">Tutoriels</h3>
          </Link>
        </li>
        <li>
          <Link className=" hover:text-teal-600 " to="/contact">
            <h3 className="">Contact</h3>
          </Link>
        </li>
        <li>
          <Link className=" hover:text-teal-600" to="/about">
            <h3 className="">À propos</h3>
          </Link>
        </li>
        <li>
          <Link className=" hover:text-teal-600" to="/dashboard">
            <h3 className="">Mon Compte</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
