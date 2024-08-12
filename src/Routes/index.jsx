import Layout from "../Components/Layout";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp/index.jsx";
import LogIn from "../Pages/LogIn/index.jsx";

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
                path: 'home',
                element: <Home/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            },
            {
                path: 'login',
                element: <LogIn/>
            }


        ]
    }]