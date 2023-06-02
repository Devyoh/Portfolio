import React from "react";
import "./notFound.css";
import { Link } from "react-router-dom";

export default function notFound() {
  return (
    <>
      <div className=" m-auto text-center">
        <div className="p-5 ">
          <h2 className="text-8xl">Erreur 404</h2>
          <p className="text-3xl">Oups... La page que vous recherchez n'existe pas encore !</p>
        </div>
        <div className="my-5 text-xl ">
          <Link to="/" className="p-2" >Cliquez ici pour retourner sur la page d'accueil</Link>
        </div>
      </div>
    </>
  );
}
