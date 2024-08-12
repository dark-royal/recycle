
import DashBar from "../Components/dashboard/DashBar";
import About from "../Components/about/About";
import Home from "../Pages/Home/index1";
import Layout from "../Components/Layout/Layout";

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