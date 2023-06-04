import React from 'react'
import Login from '../Login/login';
import useToken from '../../components/useToken/useToken';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaChartBar, FaCog, FaHome, FaInfoCircle } from 'react-icons/fa';

export default function Dashboard({ userName }) {

    const { token, setToken } = useToken();

    const location = useLocation(); 
    const currentRoute = location.pathname;

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <>
            <div className={` h-screen flex flex-row`}>
                <div className='relative w-2/12 overflow-hidden'>
                    <nav className='flex flex-col justify-between h-full text-center bg-gray-700 '>
                        <ul className=' flex flex-col h-screen justify-evenly'>
                            <li className={currentRoute === '/dashboard' ? 'text-teal-600' : ''}>
                                <Link to="/dashboard">
                                    <FaHome className='m-auto' size={'40px'} />
                                    <h3> Accueil </h3>
                                </Link>
                            </li>
                            <li className={currentRoute === '/dashboard/infos' ? 'text-teal-600' : ''}>
                                <Link to="/dashboard/infos">
                                    <FaInfoCircle className='m-auto' size={'40px'} />
                                    <h3> Mes informations </h3>
                                </Link>
                            </li>
                            <li className={currentRoute === '/dashboard/stats' ? 'text-teal-600' : ''}>
                                <Link to="/dashboard/stats">
                                    <FaChartBar className='m-auto' size={'40px'} />
                                    <h3> Statistiques </h3>
                                </Link>
                            </li>
                            <li className={currentRoute === '/dashboard/settings' ? 'text-teal-600' : ''}>
                                <Link to="/dashboard/settings">
                                    <FaCog className='m-auto' size={'40px'} />
                                    <h3> Paramètres </h3>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='w-full'>
                    <div className='container m-auto text-center'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
