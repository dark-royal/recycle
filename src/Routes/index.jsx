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
import Earnings from "../Components/earnings/Earnings";
import SubmittedImages from "../AllPages/ImagePage/image.index";
import ManageUsers from "../AllPages/manageUser/ManageUsers";
import View from "../AllPages/views";
import AssignWasteToAgent from "../AllPages/AssignWatseToAgent/assignToAnent";
import WasteReport from "../AllPages/wasteReport";
import RegisterAgents from "../AllPages/RegisterAgent/registerAgent";
import RegisterWasteForSale from "../AllPages/RegisterWasteForSale/wasteSale";

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
        path: '/dashboard',
        element: <DashBar />
    },
    {
        path: '/earnings',
        element: <Earnings />
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
            {
                path: '/submitted-images',
                element: <SubmittedImages />,
            },
            {
                path: '/manage-users',
                element: <ManageUsers />,
            },
            {
                path: '/viewAll',
                element: <View/>,
            },
            {
                path: '/assign',
                element: <AssignWasteToAgent/>,
            },
            {
                path: '/wasteReport',
                element: <WasteReport/>,
            },

            {
                path: '/registerAgent',
                element: <RegisterAgents/>,
            },
        ]
    },
    {
        path: '/registerWaste',
        element: <RegisterWasteForSale/>,
    },
    // {
    //     path: '*',
    //     element: <NotFound /> // Assuming you have a NotFound component
    // }
]