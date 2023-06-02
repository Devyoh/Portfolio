import React from "react";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";

import "./aside.css";

export default function asideContact() {
  return (
    <>
      <div className="m-auto text-center">
        <ul className="text-center m-auto">
          <li className="flex flex-col justify-center">
            <h2>Par email : </h2>
            <p> yoh-prodev@outlook.fr </p>
            <a
              className="relative bg-slate-700 w-10 h-10 m-auto rounded-3xl hover:bg-teal-600 text-white"
              href="mailto:yoh-prodev@outlook.fr"
            >
              <FaEnvelope className="absolute inset-2 text-2xl" />
            </a>
          </li>
          <hr className=" text-stone-50 w-1/6 mx-auto my-3" />
          <li className="flex flex-col justify-center ">
            <h2>Par téléphone au : </h2>
            <p>07 82 88 04 87</p>
            <a
              className="relative bg-slate-700 w-10 h-10 m-auto rounded-3xl hover:bg-teal-600 text-white"
              href="tel:0782880487"
            >
              <FaMobileAlt className="absolute inset-2 text-2xl" />
            </a>
          </li>
          <li>
            <hr className=" text-stone-50 w-1/6 mx-auto my-3" />
            <div className=" flex flex-col md:basis-1/3 m-auto ">
              <h2>Via mes réseaux :</h2>
              <div className="flex flex-wrap justify-center md:flex-row p-4 text-white">
                <Link
                  target="_blank"
                  to="https://github.com/YohanFrontDev"
                  className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600"
                >
                  <FaGithub className="absolute inset-2 text-2xl" />
                </Link>
                <Link
                  target="_blank"
                  to="https://github.com/YohanFrontDev"
                  className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600"
                >
                  <FaTwitter className="absolute inset-2 text-2xl" />
                </Link>
                <Link
                  target="_blank"
                  to="https://github.com/YohanFrontDev"
                  className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600"
                >
                  <FaInstagram className="absolute inset-2 text-2xl" />
                </Link>
                <Link
                  target="_blank"
                  to="https://github.com/YohanFrontDev"
                  className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600"
                >
                  <FaLinkedinIn className="absolute inset-2 text-2xl" />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
