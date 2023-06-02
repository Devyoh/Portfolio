import React from "react";
import "./home.css";
import Banner from "../../components/Banner/banner";
import ScrollButton from "../../components/Button/ScrollButton";

export default function Home() {
  return (
    <>
      <Banner />
        <ScrollButton />
        <div className="container h-full">
          <div></div>
          <div></div>
        </div>
    </>
  );
}
