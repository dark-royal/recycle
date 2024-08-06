
import Home from "../Pages/Home";
import Layout from "../Components/Layout";

export const ROUTES = [
    {
        path: '/home',
        element: <Layout/>,
        children : [
            {
                path: '',
                element: <Home/>
            },

        ]
    }]