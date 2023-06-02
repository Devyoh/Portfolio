import ProjectCard from "../../components/Card/projectCard";

export default function Projects() {
  return (
    <>
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
    </>
  );
}
