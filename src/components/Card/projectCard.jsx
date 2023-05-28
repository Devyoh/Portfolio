import React from "react";
import projects from "../../data/projects";
import { Link } from "react-router-dom";
import "./card.css";

export default function ProjectCard(id) {
  return projects.map((project) => {
    return (
      <li className="py-2 m-auto " key={project.id}>
        <div className="card-container m-4 border rounded-md h-72 relative overflow-hidden hover:scale-110 hover:duration-500 duration-500">
          <div className=" z-50 header_card text-center text-white absolute bottom-1 left-5">
            <h2>{project.title}</h2>
          </div>
          <div className=" body_card flex flex-col">
            <Link
              to={`/projet/${project.id}`}
              className="card-project w-full h-full overflow-hidden "
            >
              <img
                className=" object-cover cursor-pointer "
                src={project.cover}
                alt={`Projet ` + project.title}
              />
            </Link>
          </div>
        </div>
      </li>
    );
  });
}
