import React from "react";
import "./contact.css";
import ContactForm from "../../components/Form/contactForm";
import Aside from "../../components/Aside/asideContact";
import Banner from "../../components/Banner/banner";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col">
        <Banner />
        <div className="container flex flex-row m-auto p-5">
          <div className="basis-2/4">
            <ContactForm />
          </div>
          <div className="basis-2/4 m-auto">
          <div className="text-center my-4" >
              <p> Pour prendre contact avec moi,<br/> n'hésitez pas à passer via </p>
            </div>
            <Aside />
          </div>
        </div>
      </div>
    </>
  );
}
