import React from "react";
import "./connexion.css";
import ConnectForm from './../../components/Form/connectForm'
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

export default function Connexion() {


  return (
    <>
      <Header />
      <main>
        <div className="container flex flex-row m-auto">
          <div className="basis-1/2">

          </div>
          <div className="basis-1/2">
            <ConnectForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )

}
