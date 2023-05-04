import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="fixed bottom-0 w-100% bg-footer-radient text-white">
        <div className="container lg:py-4 text-center">
          <div className=" flex flex-wrap md:flex-row lg:h-36 py-3">
            <div className="basis-1/4">
              <img src={'./../../assets/city_footer.png' } alt="Rodez"></img>
              <h2>Services</h2>
              <hr className=" text-stone-50 w-1/6 mx-auto my-3"/>
              <div>
                <ul>
                  <li>
                    <p>Site internet</p>
                  </li>
                  <li>
                    <p>Maintenances</p>
                  </li>
                  <li>
                    <p>Conception de Logos</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className=" flex flex-col md:basis-1/4">
              
              <h2>Mes réseaux :</h2>
              <hr className=" text-stone-50 w-1/5 mx-auto my-3"/>

              <div className="flex flex-wrap  md:flex-row p-4">
                <Link target="_blank" to="https://github.com/YohanFrontDev" className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600">
                  <FaGithub className="absolute inset-2 text-2xl" />
                </Link>
                <Link target="_blank" to="https://github.com/YohanFrontDev" className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600">
                  <FaTwitter className="absolute inset-2 text-2xl" />
                </Link>
                <Link target="_blank" to="https://github.com/YohanFrontDev" className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600">
                  <FaInstagram className="absolute inset-2 text-2xl" />
                </Link>
                <Link target="_blank" to="https://github.com/YohanFrontDev" className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600">
                  <FaLinkedinIn className="absolute inset-2 text-2xl" />
                </Link>
              </div>
            </div>
            <div className=" flex flex-col basis-1/4">
              <h2>Liens utiles</h2>
              <hr className=" text-stone-50 w-1/6 mx-auto my-3"/>
              <div className="flex flex-col m-3 ">
                <Link to="/connexion" className="relative  ">
                  <p className=" hover:text-teal-600" >Créer un compte </p>
                </Link>
                <Link to="/contact" className="relative ">
                  <p className=" hover:text-teal-600" >Me contacter </p>
                </Link>
                <Link to="/tutoriels" className="relative ">
                  <p className=" hover:text-teal-600" >Tutoriels </p>
                </Link>
                <Link to="/connexion" className="relative ">
                  <p className=" hover:text-teal-600" >Mes Projets </p>
                </Link>
              </div>
            </div>
            <div className=" flex flex-col basis-1/3">
              <div className=""></div>
            </div>
          </div>
            <div className="flex flex-col  justify-center">
              <p className="sm:text-xs">Mentions légales</p>
              <p>Copyright © 2022-2023 - Tous droits réservés.</p>
            </div>
        </div>
      </footer>
    </>
  );
}
