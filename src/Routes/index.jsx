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
import AdminBar from "../Components/adminDashboard/AdminBar";
import ProtectedRoute from "./ProtectedRoute";
import BlogPage from "../Components/blog/BlogPage";

// Example authentication check function
const isAuthenticated = () => {
    return !!localStorage.getItem("accessToken");
};

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
        path: '/blog',
        element: <BlogPage/>
    },

    {
        path: '/dashboard',
        element: <ProtectedRoute element={DashBar} isAuthenticated={isAuthenticated()} />
    },
    {
        path: '/earnings',
        element: <ProtectedRoute element={Earnings} isAuthenticated={isAuthenticated()} />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: '/adminDashboard',
        element: <AdminBar />,
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
                element: <ProtectedRoute element={SubmittedImages} isAuthenticated={isAuthenticated()} />,
            },
            {
                path: '/manage-users',
                element: <ProtectedRoute element={ManageUsers} isAuthenticated={isAuthenticated()} />,
            },
            {
                path: '/viewAll',
                element: <ProtectedRoute element={View} isAuthenticated={isAuthenticated()} />,
            },
            {
                path: '/assign',
                element: <ProtectedRoute element={AssignWasteToAgent} isAuthenticated={isAuthenticated()} />,
            },
            {
                path: '/wasteReport',
                element: <ProtectedRoute element={WasteReport} isAuthenticated={isAuthenticated()} />,
            },
            {
                path: '/registerAgent',
                element: <ProtectedRoute element={RegisterAgents} isAuthenticated={isAuthenticated()} />,
            },
        ]
    },
    {
        path: '/registerWaste',
        element: <ProtectedRoute element={RegisterWasteForSale} isAuthenticated={isAuthenticated()} />,
    },
    // {
    //     path: '*',
    //     element: <NotFound /> // Assuming you have a NotFound component
    // }
];