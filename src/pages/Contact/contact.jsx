import React from "react";
import "./contact.css";
import ContactForm from "../../components/Form/contactForm";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import theme from "../../components/Button/themeButton";
import Aside from "../../components/Aside/asideContact";
import ThemeButton from "../../components/Button/themeButton";

export default function Contact() {
  return (
    <>
      <Header />
      <main className={`h-screen ${theme}`}>
        <div className="flex flex-col">
          <h1 className="text-center">Me contacter</h1>
          <div>
            <ThemeButton />
          </div>
          <div className="container flex flex-row m-auto p-5">
            <div className="basis-1/3 m-auto text-center">
              <h1>Envie de mettre en ligne un projet ? </h1>
              <p> Lancez vous dès maintenant en me contactant ! </p>
            </div>
            <div className="basis-1/3">
              <ContactForm />
            </div>
            <div className="basis-1/3">
              <Aside />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
