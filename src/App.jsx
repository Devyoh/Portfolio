import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import Contact from "./pages/Contact/contact";
import Infos from "./pages/About/about";
import NotFound from "./pages/NotFound/notFound";
import Tutoriels from "./pages/Tutoriels/tutoriels";
import Projects from "./pages/Projects/projects";
import Project from "./pages/Project/project";
import { useEffect, useState } from "react";
import Dashboard from "./pages/DashBoard/dashboard";

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
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


export default App;
