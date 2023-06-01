import React from "react";
import "./register.css";
import RegisterForm from "../../components/Form/registerForm";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

export default function Register() {
  return (
    <>
      <Header />
      <main className="container m-auto">
        <div className="">
            <RegisterForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
