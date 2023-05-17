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

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/tuto",
      element: <Tutoriels />,
    },
    {
      path: '/projets',
      element: <Projects />
    },

    {
      path: '/projet/:id',
      element: <Project />
    },

    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/about',
      element: <Infos />
    },
    {
      path: "*",
      element: <NotFound />
    },
    {
      path: "/connexion",
      element: <Connexion />
    },
    {
      path: "/inscription",
      element: <Inscription />
    },
  ]);
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
