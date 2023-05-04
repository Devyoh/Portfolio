import React from "react";
import "./connexion.css";
import ConnectForm from './../../components/Form/connectForm'
import RegisterForm from "../../components/Form/registerForm";

export default function Connexion() {




  return (
    <>
    <main>
      <div className="container flex flex-row  h-full w-full">
        <div className="basis-1/3 justify-center">
          <ConnectForm/>
        </div>
        <div className="basis-1/3">
          <RegisterForm/>
        </div>
        <div className="basis-1/3">

        </div>
      </div>
    </main>
    </>
  )
 
}
