import React from 'react'
import Login from '../Login/login';
import useToken from '../../components/useToken/useToken';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import theme from "../../components/Button/themeButton";
import ThemeButton from '../../components/Button/themeButton';


export default function Dashboard({userName}) {

    const { token, setToken } = useToken();
    console.log(userName)



    if (!token) {
        return <Login setToken={setToken} />
    }


    return (
        <>
            <Header />
            <main className={` h-screen ${theme}`}>
                <div className='container m-auto text-center'>
                    <h2>Bienvenue dans ton espace personnel {userName}</h2>
                </div>
                <div>
            <ThemeButton />
          </div>
            </main>
            <Footer />
        </>
    )
}
