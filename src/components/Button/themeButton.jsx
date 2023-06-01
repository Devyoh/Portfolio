import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

import "./buttons.css";

export default function ThemeButton() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setToggle(true);
    } else {
      setTheme("light");
      setToggle(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
if(toggle === undefined) {console.log('erreur darkmode')}
  return (
    <>
      <button onClick={toggleTheme}>
        {theme === "light" && <BsToggleOff size={"25px"} />}
        {theme === "dark" && <BsToggleOn size={"24px"} />}
      </button>
      <h1>Hello World</h1>
    </>
  );
}