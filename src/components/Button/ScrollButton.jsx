import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import "./buttons.css";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    <>
      <button className={visible ? "inline" : "none"}>
        <FaArrowAltCircleUp
          onClick={scrollToTop}
          className="fixed cursor-pointer text-teal-800 bottom-20 right-20"
          size={40}
        />
      </button>
    </>
  );
}
