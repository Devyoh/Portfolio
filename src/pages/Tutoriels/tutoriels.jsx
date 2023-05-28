import React from "react";
import "./tutoriels.css";

import Gallery from "./../../components/Gallery/gallery";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

export default function tutoriels() {
  return (
    <>
      <Header />
      <main className="container min-h-full">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
