import React from "react";
import "./connexion.css";
import ConnectForm from './../../components/Form/connectForm'

export default function Connexion() {




  return (
    <>
    <main>
      <div className="container flex flex-row m-auto">
        
        <div className="basis-1/2 mt-4">
        <ConnectForm/>
        </div>
        <div className="basis-1/2">

        </div>
      </div>
    </main>
    </>
  )
 
}
