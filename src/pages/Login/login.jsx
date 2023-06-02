import React, { useState } from "react";
import "./login.css";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";



async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <>
        <div className=" m-auto w-full flex">
        <div className="title-form min-w-max w-1/4 max-w-full m-auto text-center">
          <form
            className=" flex flex-col p-10 my-10 rounded-xl bg-form-radient   "
            action="submit"
            method="post"
            onSubmit={handleSubmit}
          >
            <FaUserCircle className="m-auto" size={'100px'}/>
            <h2 className="my-4">Se connecter</h2>
            <label htmlFor="email">
              <input
                className="border rounded-lg text-center text-xl w-full my-5 p-2"
                placeholder="Saisissez votre email"
                type="email"
                name="email"
                autoFocus
                onChange={e => setUserName(e.target.value)}
  />
            </label>
            <label htmlFor="password flex">
              <input
                className="border rounded-lg text-center text-xl w-full my-5 p-2"
                placeholder="Saisissez un mot de passe"
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </label>
            <div className=" flex justify-center">
              <button
                className=" flex flex-row w-1/3 h-14 justify-center mx-auto my-10 bg-form-radient hover:bg-sky-700 text-xl rounded-3xl text-white text-center"
                type="submit"
                value="Envoyer"
              >
                <span className="m-auto text-2xl">Valider</span>
              </button>
            </div>
            <div className="link-redirect flex flex-row justify-between text-blue-400 text-md ">
              <Link to="/register">
                <span>Créer un compte</span>
              </Link>
              <Link to="/register">
                <span>Mot de passe oublié ?</span>
              </Link>
            </div>
          </form>
        </div>
        </div>
    </>
  );
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}