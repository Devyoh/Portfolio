import React, { useEffect, useState } from "react";
import projects from "../../data/projects";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Slider from "../../components/Slider/slider";
import Tag from "../../components/Tag/tag";
import { FaGithub } from "react-icons/fa";
import earth from "../../assets/Others/earth.png";

export default function Project() {
  const [imageSlider, setImageSlider] = useState([]);

  const idProject = useParams("id").id;
  const myProject = projects.filter((data) => data.id === idProject);

  useEffect(() => {
    const dataCurrentProject = projects.filter((data) => data.id === idProject);
    setImageSlider(dataCurrentProject[0].pictures);
  }, [idProject]);

  const title = myProject[0].title;
  const tag = myProject[0].tags.map((tag) => tag);
  const repoUrl = myProject[0].repo;
  const website = myProject[0].website;
  const description = myProject[0].description;

  return (
    <>
      <Header />
      <main className="container m-auto">
        <div className="h-screen mx-auto flex flex-col">
          <div className=" text-center m-auto">
            <h1 className="font-bold font-serif">{title}</h1>
          </div>
          <Slider imageSlider={imageSlider} />
          <div className="description_content grid grid-cols-3">
            <div className="tag_container flex flex-col text-center">
              <ul className="flex justify-center">
                {tag.map((tag, index) => {
                  return (
                    <li key={index}>
                      <Tag content={tag} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="description_container">
              <p>{description}</p>
            </div>

            <div className="links text-center text-white m-auto p-5 flex justify-center space-x-4">
              <div>
                <div>
                  <Link
                    target="_blank"
                    to={repoUrl}
                    className="relative bg-slate-700 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600"
                  >
                    <FaGithub className=" text-2xl bg-black" />
                  </Link>
                  <Link
                    target="_blank"
                    to={website}
                    className="relative bg-slate-800 w-10 h-10 mx-1 rounded-3xl hover:bg-teal-600"
                  >
                    <img
                      src={earth}
                      className="w-10"
                      alt={title + ` website`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
