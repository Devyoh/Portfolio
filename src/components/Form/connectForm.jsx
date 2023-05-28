import React from "react";
import "./form.css";

import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ConnectForm() {
  return (
    <>
      <div className=" flex flex-col w-1/1">
        <div className="title-form p-4 text-center w-2/3 h-1/1 m-auto">
          <h2>Se connecter</h2>

          <form
            className=" flex flex-col  p-6 bg-slate-200 rounded-xl bg-form-radient mx-auto "
            action="submit"
            method="post"
          >
            <label htmlFor="email">
              <input
                className="border rounded-lg justify-center mx-auto my-2 p-1"
                placeholder="Saisissez votre email"
                type="email"
                name="email"
                id=""
              />
            </label>
            <label htmlFor="password">
              <input
                className="border rounded-lg justify-center m-auto p-1"
                placeholder="Saisissez un mot de passe"
                type="password"
                name="password"
                id=""
                icon={<FaRegEye />}
              />
            </label>
            <div className=" flex justify-center">
              <button
                className=" flex flex-row w-1/3 h-full justify-center m-2 p-2 bg-form-radient hover:bg-form-radient-invert rounded text-white"
                type="submit"
                value="Envoyer"
              >
                <span>Valider</span>
              </button>
            </div>
            <div className="link-redirect flex flex-row justify-between text-blue-400 text-sm m-2">
              <Link to="/inscription">
                <span>Créer un compte</span>
              </Link>
              <Link to="/inscription">
                <span>Mot de passe oublié ?</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
