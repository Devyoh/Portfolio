import React from 'react'
import Login from '../Login/login';
import useToken from '../../components/useToken/useToken';
import theme from "../../components/Button/themeButton";
import ThemeButton from '../../components/Button/themeButton';
import Menu from '../../components/Aside/Menu';


export default function Dashboard({ userName }) {

    const { token, setToken } = useToken();
    console.log(userName)



    if (!token) {
        return <Login setToken={setToken} />
    }


    return (
        <>
            <div className={` h-screen ${theme} container flex flex-row m-auto`}>
                <Menu />
                <div className='basis-2/3'>
                    <div className='container m-auto text-center'>
                        <h2>Bienvenue dans ton espace personnel {userName}</h2>
                    </div>
                    <div>
                        <ThemeButton />
                    </div>
                </div>
            </div>
        </>
    )
}
