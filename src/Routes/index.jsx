import Layout from "../Components/Layout";
import Home from "../Pages/Home";
import DashBar from "../Components/dashboard/DashBar";
import About from "../Components/about/About";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";

export const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            }, {
                path: 'login',
                element: <LogIn/>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <DashBar />
    },
    {
        path: 'about',
        element: <About />
    }

]