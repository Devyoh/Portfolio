import React, { useState } from "react";

import "./Dropdown.css";

import arrow from "./../../assets/Others/arrow.png";

export default function Dropdown({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="dropdown w-full">
        <h3 className="dropdown_title flex flex-col">
          Information supplémentaires
        </h3>
        <img
          onClick={() => setToggle(!toggle)}
          className={toggle ? "arrow arrow_up" : "arrow arrow_down"}
          src={arrow}
          alt="show content"
        />

        <div
          className={toggle ? "dropdown_content" : "dropdown_content_hidden"}
        >
          {content}
        </div>
      </div>
    </>
  );
}
