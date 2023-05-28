import React from "react";
import "./home.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Banner from "../../components/Banner/banner";
import ScrollButton from "../../components/Button/ScrollButton";
import theme from "../../components/Button/themeButton";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main className={`h-screen ${theme}`}>
        <ScrollButton />
        <div className="container h-full">
          <div></div>
          <div></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
