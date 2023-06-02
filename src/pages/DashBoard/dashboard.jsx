import React from 'react'
import Login from '../Login/login';
import useToken from '../../components/useToken/useToken';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaChartBar, FaCog, FaHome, FaInfoCircle } from 'react-icons/fa';

export default function Dashboard({ userName }) {

    const { token, setToken } = useToken();

    const location = useLocation();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <>
            <div className={` h-screen flex flex-row`}>
                <div className='relative w-1/5 overflow-hidden'>
                    <nav className='flex flex-col justify-between w-40 h-full text-center bg-gray-700 '>
                        <ul className=' flex flex-col h-screen justify-around'>
                            <li>
                                <Link to="/dashboard">
                                    <FaHome className='m-auto' size={'40px'} />
                                    <h3> Paramètres </h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/infos">
                                    <FaInfoCircle className='m-auto' size={'40px'} />
                                    <h3> Mes informations </h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/stats">
                                    <FaChartBar className='m-auto' size={'40px'} />
                                    <h3> Statistiques </h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/settings">
                                    <FaCog className='m-auto' size={'40px'} />
                                    <h3> Paramètres </h3>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='basis-2/3'>
                    <div className='container m-auto text-center'>
                        {location.pathname === "/dashboard" &&
                            <div>
                                <h2>Bienvenue  {userName} !</h2>
                            </div>
                        }
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
