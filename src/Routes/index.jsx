
import DashBar from "../Components/dashboard/DashBar";
import About from "../Components/about/About";
import Layout1 from "../Components/Layout/layouts";
import Client from "../Pages/Clinet/client";
import TrashSize from "../Pages/SizeTrash/trash";
import Pickup from "../Pages/PickupRequest/pickup";

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
    },
    {
        path: '/information',
        element: <Layout1 />,
        children: [
            {
                path: '',
                element: <Client />
            },
        ]
    },
    {
        element: <Layout1 />,
        children: [
            {
                path: '/size',
                element: <TrashSize />
            },
        ]
    },

    {
        element: <Layout1 />,
        children: [
            {
                path: '/pickup',
                element: <Pickup />
            },
        ]
    }

]