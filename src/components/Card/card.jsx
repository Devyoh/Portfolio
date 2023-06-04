import React from "react";
import "./card.css";

export default function Card({title,content}) {
  return (
    <>
      <div className="m-4">
        <div className="header_card">
          <h2>{title}</h2>
        </div>
        <div className="body_card">
          <p>{content}</p>
        </div>
        <div className="footer_card">
        </div>
      </div>
    </>
  );
}
