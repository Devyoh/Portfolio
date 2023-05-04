import React from "react";
import "./about.css";

import Card from './../../components/Card/card'


export default function about() {
  return (
    <>
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
    </>

  )

}
