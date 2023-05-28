import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/Home/home";
import Connexion from "./pages/Connexion/connexion";
import Inscription from "./pages/Inscription/inscription";
import Contact from "./pages/Contact/contact";
import Infos from "./pages/About/about";
import NotFound from "./pages/NotFound/notFound";
import Tutoriels from "./pages/Tutoriels/tutoriels";
import Projects from "./pages/Projects/projects";
import Project from "./pages/Project/project";
import { useEffect, useState } from "react";

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

  if(toggle === undefined || toggleTheme === undefined) {
    console.log('erreur darkmode')
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/tuto",
      element: <Tutoriels />,
    },
    {
      path: "/projets",
      element: <Projects />,
    },

    {
      path: "/projet/:id",
      element: <Project />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <Infos />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/connexion",
      element: <Connexion />,
    },
    {
      path: "/inscription",
      element: <Inscription />,
    },
  ]);
  
    return (
      <>
        <RouterProvider router={router}>
          <main className={`h-screen ${theme}`}></main>
        </RouterProvider>
      </>
    );
  }


export default App;
