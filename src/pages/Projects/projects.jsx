import TopButton from '../../components/Button/TopButton';
import ProjectCard from '../../components/Card/projectCard';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

export default function Projects() {

    return (
        <>
            <Header />
            <TopButton/>
            <main className='h-screen'>
                <div className='m-auto p-5'>
                    <div>
                        <h1>Liste de mes projets en ligne</h1>
                    </div>
                    <div className=' md:container-lg:w-full'>
                        <ul className="justify-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            <ProjectCard />
                        </ul>
                    </div >
                </div >
            </main>
            <Footer />
        </>
    )
}
