import React, { useEffect, useState } from 'react'
import projects from '../../data/projects'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Slider from '../../components/Slider/slider';
import Tag from '../../components/Tag/tag';


export default function Project() {

    const [imageSlider, setImageSlider] = useState([]);

    const idProject = useParams('id').id;
    const myProject = projects.filter(data => data.id === idProject);

    useEffect(() => {
        const dataCurrentProject = projects.filter(data => data.id === idProject);
        setImageSlider(dataCurrentProject[0].pictures);
    }, [idProject]);

    const title = myProject[0].title;
    const tag = myProject[0].tags.map((tag => tag))
    const repoUrl = myProject[0].repo;
    const website = myProject[0].website;


    return (
        <>
            <Header />
            <main>
                <div className='h-screen container m-auto flex flex-col'>
                    <Slider imageSlider={imageSlider} />
                    <div className='h-20 text-center m-auto'>
                        <h1>{title}</h1>
                    </div>
                    <div className="">
                        <ul className='flex justify-center'>
                            {tag.map((tag, index) => {
                                return (
                                    <li key={index}>
                                        <Tag content={tag} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <p>Repo github :{repoUrl}</p>
                    <p>Lien vers le site :{website}</p>
                </div>
            </main>
            <Footer />
        </>
    )
}
