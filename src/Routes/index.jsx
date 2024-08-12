import Layout from "../Components/Layout";
import Home from "../Pages/Home";
import DashBar from "../Components/dashboard/DashBar";
import About from "../Components/about/About";

export const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children : [
            {
                path: '/',
                element: <Home/>
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