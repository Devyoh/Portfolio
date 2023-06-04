import React from "react";
import "./about.css";

import Card from "./../../components/Card/card";
import Banner from "../../components/Banner/banner";

export default function about() {




  return (
    <>
      <Banner />
        <div className="flex flex-row justify-center flex-wrap ">
          <div className="basis-1/4">
            <Card title="technologies" />
          </div>
          <div className="basis-1/4">
            <Card 
            title="langages"
            content="coucou" />
          </div>
          <div className="basis-1/4">
            <Card />
          </div>
          <div className="basis-1/4">
            <Card />
          </div>
        </div>
    </>
  );
}
