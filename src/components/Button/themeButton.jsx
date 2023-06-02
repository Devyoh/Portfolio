import React, { useEffect, useState } from "react";
import Switch from '@mui/material/Switch/Switch';
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


  if (toggle === undefined) { console.log('erreur darkmode') }

  return (
    <>
      {theme === "dark" && <Switch onClick={toggleTheme} defaultChecked />}
      {theme === "light" && <Switch onClick={toggleTheme} />}
    </>
  );
}
