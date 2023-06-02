import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function RegisterForm() {

  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      default:
        return console.log('default case');

      case firstName:
        return setFirstName(value);

      case lastName:
        return setLastName(value);

      case email:
        return setEmail(value);

      case password:
        return setPassword(value);

      case confirmPassword:
        return setConfirmPassword(value);
    }
  }



  return (
    <>
      <div className=" flex">
        <div className="title-form min-w-max w-1/4 max-w-full m-auto text-center">
          <form
            className=" flex flex-col p-10 my-10 rounded-xl bg-form-radient"
            action="submit"
            method="post"
          >
            <FaUserCircle className="m-auto" size={'100px'} />
            <h2 className="my-4"> Création de mon compte</h2>
            <div className="flex flex-col justify-around text-black">
              <div className="flex flex-row justify-between">
                <label htmlFor="lastName">
                  <input
                    className=" rounded-3xl text-center text-xl my-5 mx-2 p-2 "
                    placeholder="Saisissez votre Nom"
                    type="lastName"
                    name="lastName"
                    value={lastName}
                    autoFocus
                    id=""
                    onChange={(e) => handleInputChange(e)}

                  />
                </label>
                <label htmlFor="firstName">
                  <input
                    className=" rounded-3xl text-center text-xl my-5 p-2"
                    placeholder="Saisissez votre Prénom"
                    type="firstname"
                    name="firstname"
                    value={firstName}
                    id=""
                    onChange={(e) => handleInputChange(e)}

                  />
                </label>
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">
                  <input
                    className="border rounded-3xl text-center text-xl w-full my-5 p-2"
                    placeholder="Saisissez votre email"
                    type="email"
                    name="email"
                    value={email}
                    id=""
                    onChange={(e) => handleInputChange(e)}

                  />
                </label>
                <label className=" justify-between" htmlFor="password">
                  <input
                    className="border rounded-3xl text-center text-xl w-full my-5 p-2"
                    placeholder="Saisissez un mot de passe"
                    type="password"
                    name="password"
                    value={password}
                    id="password"
                    onChange={(e) => handleInputChange(e)}

                  />
                </label>
                <label className=" justify-between" htmlFor="password">
                  <input
                    className="border rounded-3xl text-center text-xl w-full my-5 p-2"
                    placeholder="Confirmer le mot de passe"
                    type="password"
                    name="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => handleInputChange(e)}
                  />
                </label>
              </div>
            </div>
            <div className=" flex justify-center">
              <button
                className=" flex flex-row w-1/3 h-14 justify-center mx-auto my-10 bg-form-radient hover:bg-sky-700 text-xl rounded-3xl text-white text-center"
                type="submit"
                value="Envoyer"
              >
                <span className="m-auto text-2xl">Confirmer</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
