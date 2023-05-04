import React from "react";
import "./contact.css";
import ContactForm from "../../components/Form/contactForm";

export default function contact() {
  return (
    <>
    <main>
      <div className="container flex flex-row">
        <div className="basis-1/3">
          Mes informations
        </div>
        <div className="basis-1/3">
          <ContactForm/>
        </div>
        <div className="basis-1/3">
          Espace ?
        </div>
      </div>
    </main>
    </>
    
  );
}
