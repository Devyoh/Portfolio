import "./styles/App.css";

import { useEffect, useState } from "react";

import ScrollButton from "./components/Button/ScrollButton";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";

function App() {

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

  if (toggle === undefined || toggleTheme === undefined) {
    console.log('erreur darkmode')
  }

 

  return (
    <>
      <ScrollButton />
      <Header />
      <Main>
      </Main >
      <Footer />
    </>
  );
}


export default App;
