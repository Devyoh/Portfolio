import React from "react";
import "./about.css";

import Card from "./../../components/Card/card";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Banner from "../../components/Banner/banner";

export default function about() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <div className="flex flex-row justify-center flex-wrap ">
          <div className="basis-1/4">
            <Card />
          </div>
          <div className="basis-1/4">
            <Card />
          </div>
          <div className="basis-1/4">
            <Card />
          </div>
          <div className="basis-1/4">
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
