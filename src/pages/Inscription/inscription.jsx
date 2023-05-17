import React from "react";
import "./inscription.css";
import RegisterForm from "../../components/Form/registerForm";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

export default function inscription() {
  return (
    <>
      <Header />
      <main>
        <div>
          <div>

          </div>
          <div>
            <RegisterForm />
          </div>
        </div>

      </main>
      <Footer />
    </>

  )
}
