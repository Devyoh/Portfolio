import ScrollButton from "../../components/Button/ScrollButton";
import ProjectCard from "../../components/Card/projectCard";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import theme from "../../components/Button/themeButton";

export default function Projects() {
  return (
    <>
      <Header />
      <ScrollButton />
      <main className={`h-full container m-auto p-5 ${theme}`}>
        <div className="m-auto p-5">
          <div className="text-center">
            <h1>Liste de mes projets en ligne</h1>
          </div>
          <div className=" md:container-lg:w-full">
            <ul className="justify-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              <ProjectCard />
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
