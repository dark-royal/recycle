import Layout from "../Components/Layout";
import Home from "../Pages/Home";
import DashBar from "../Components/dashboard/DashBar";
import About from "../Components/about/About";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";
import Layouts from "../AllPages/Layouts";
import Client from "../AllPages/Client";
import TrashSize from "../AllPages/Trash";
import Pickup from "../AllPages/PickUp";

export const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children : [
            {
                path: '/home',
                element: <Home/>
            },
        ]
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <LogIn/>
    },
    {
        path: 'dashboard',
        element: <DashBar />
    },
    {
        path: 'about',
        element: <About />
    },

    {
        path: '/information',
        element: <Layouts />,
        children: [
            {
                path: '',
                element: <Client />
            },
        ]
    },
    {
        element: <Layouts />,
        children: [
            {
                path: '/size',
                element: <TrashSize />
            },
        ]
    },

    {
        element: <Layouts/>,
        children: [
            {
                path: '/pickup',
                element: <Pickup />
            },
        ]
    }

]