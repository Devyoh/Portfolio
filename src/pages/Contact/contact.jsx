import React from "react";
import "./contact.css";
import ContactForm from "../../components/Form/contactForm";
import Aside from "../../components/Aside/asideContact";
import Banner from "../../components/Banner/banner";

export default function Contact() {
  return (
    <>
        <div className="flex flex-col">
          <Banner/>
          <div className="container flex flex-row m-auto p-5">
            <div className="basis-2/3">
              <div className="text-center" >
              <h1>Envie de mettre en ligne un projet ? </h1>
              <p> Demandez un devis en ligne ! </p>
              </div>
              <ContactForm />
            </div>
            <div className="basis-1/3">
              <Aside />
            </div>
          </div>
        </div>
    </>
  );
}
