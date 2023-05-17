import React from "react";
import "./home.css";
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Banner from '../../components/Banner/banner'
import TopButton from "../../components/Button/TopButton";


export default function home() {
  return (
    <>
    <Header/>
    <Banner/>
      <main className="h-screen">
        <TopButton/>
        <div className="container h-full">
          <div>

          </div>
          <div>
            
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
