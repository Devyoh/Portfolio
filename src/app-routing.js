import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/home';
import NotFound from './pages/NotFound/notFound.jsx';

export default function AppRouting() {
    const Tutoriel = React.lazy(() => import("./pages/Tutoriels/tutoriels.jsx"));
    const Register = React.lazy(() => import("./pages/Register/register"));
    const Contact = React.lazy(() => import("./pages/Contact/contact"));
    const Infos = React.lazy(() => import("./pages/About/about"));
    const Dashboard = React.lazy(() => import("./pages/DashBoard/dashboard"));
    const Projects = React.lazy(() => import("./pages/Projects/projects"));
    const Project = React.lazy(() => import("./pages/Project/project"));
    const Statistic = React.lazy(() => import("./components/Dashboard/statistic"));
    const MyAccount = React.lazy(() => import("./components/Dashboard/myAccount"));
    const Settings = React.lazy(() => import("./components/Dashboard/settings"));
    const General = React.lazy(() => import("./components/Dashboard/home"));

    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="about/*" element={<Suspense fallback={<>...</>}><Infos /></Suspense>} />
                <Route path="tuto/*" element={<Suspense fallback={<>...</>}><Tutoriel /></Suspense>} />
                <Route path="register/*" element={<Suspense fallback={<>...</>}><Register /></Suspense>} />
                <Route path="contact/*" element={<Suspense fallback={<>...</>}><Contact /></Suspense>} />
                <Route path="dashboard/" element={<Suspense fallback={<>...</>}><Dashboard /></Suspense>} >
                    <Route path="" element={<Suspense fallback={<>...</>}><General /></Suspense>} />
                    <Route path="infos" element={<Suspense fallback={<>...</>}><MyAccount /></Suspense>} />
                    <Route path="stats" element={<Suspense fallback={<>...</>}><Statistic /></Suspense>} />
                    <Route path="settings" element={<Suspense fallback={<>...</>}><Settings /></Suspense>} />
                </Route>
                <Route path="projets/*" element={<Suspense fallback={<>...</>}><Projects /></Suspense>} />
                <Route path="projet/:id/*" element={<Suspense fallback={<>...</>}><Project /></Suspense>} />
            </Routes>
        </>
    )
}
