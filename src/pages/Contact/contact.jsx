import React from "react";
import "./contact.css";
import ContactForm from "../../components/Form/contactForm";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import theme from "../../components/Button/themeButton";
import Aside from "../../components/Aside/asideContact";
import Banner from "../../components/Banner/banner";

export default function Contact() {
  return (
    <>
      <Header />
      <main className={`h-screen ${theme}`}>
        <div className="flex flex-col">
          <Banner/>
          <div className="container flex flex-row m-auto p-5">
            <div className="basis-1/2">
              <h1>Envie de mettre en ligne un projet ? </h1>
              <p> Lancez vous dès maintenant en me contactant ! </p>
              <ContactForm />
            </div>
            <div className="basis-1/2">
              <Aside />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
