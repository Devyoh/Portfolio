import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/Home/home";
import Connexion from "./pages/Connexion/connexion";
import Inscription from "./pages/Inscription/inscription";
import Contact from "./pages/Contact/contact";
import Infos from "./pages/About/about";
import NotFound from "./pages/NotFound/notFound";
import Tutoriels from "./pages/Tutoriels/tutoriels";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <div className="App ">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="*" element={<Navigate replace to="/notFound" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Infos />} />
          <Route path="/tuto" element={<Tutoriels />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
